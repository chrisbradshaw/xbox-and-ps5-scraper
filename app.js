const axios = require("axios");
const cheerio = require("cheerio");
const logtimestamp = require("log-timestamp");
const player = require("play-sound")((opts = {}));
const open = require("open");

// aggregate scraped data into an array of js objects
const scrapedData = [];

// add colors for console.log downstairs 👨‍🎨
const colors = { red: "\x1b[31m", green: "\x1b[32m" };

// fetch data for given url
const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

// fetch data and add to scrapedData array
const fetchDataFn = async (consoleString) => {
  const $ = await fetchData(`https://www.nowinstock.net/videogaming/consoles/${consoleString}/`);

  $("#trackerContent > div#data > table > tbody > tr").each((index, element) => {
    if (index === 0) return true;
    const tds = $(element).find("td");

    const [name, status, price, lastStock] = tds;

    scrapedData.push({
      name: $(name).text(),
      link: $(name).find("a").attr("href"),
      status: $(status).text(),
      price: $(price).text(),
      lastStock: $(lastStock).text(),
    });
  });

  return scrapedData;
};

// check scrapedData for any available consoles
const checkForStockAndAlert = (data, i) => {
  const consoleData = {
    0: { name: "Xbox Series X", sound: "./mp3s/xbox-in-stock.mp3" },
    1: { name: "Playstation 5", sound: "./mp3s/playstation-in-stock.mp3" },
  };

  const currentConsole = consoleData[i];

  const potentials = data.filter(
    (v) => v.status !== "Out of Stock" && v.status !== "Not Tracking" && !v.name.startsWith("Ebay") // ain't nobody got time for Ebay
  );

  if (potentials.length > 0) {
    console.log(colors.green, `${currentConsole.name} LOCATED`);

    // open link of each potential console in default browser
    potentials.forEach((potential) => open(potential.link));

    player.play(`${currentConsole.sound}`, function (err) {
      if (err) throw err;
    });
  } else {
    console.log(colors.red, `No ${currentConsole.name} located! :(`);
  }
};

// Check all console types for stock every 5 minutes, notify if consoles are available
(function schedule() {
  Promise.all([fetchDataFn("microsoftxboxseriesx"), fetchDataFn("sonyps5")])
    .then(function (allConsoleData) {
      allConsoleData.forEach((console, i) => {
        checkForStockAndAlert(console, i);
      });

      console.log("Process finished, waiting 5 minutes");
      setTimeout(function () {
        console.log("Going to restart");
        schedule();
      }, 1000 * 60 * 5);
    })
    .catch((err) => console.error("error in scheduler", err));
})();

//  future additions - call retailer APIs directly, use puppeteer, command line argument to specify duration, twilio
