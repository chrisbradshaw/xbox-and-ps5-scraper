# xbox-and-ps5-scraper

Scrapes stock checker for Xbox Series X and PS5 inventory and sounds alarm when in stock

## Built With

- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [Cheerio](https://www.npmjs.com/package/cheerio) - Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [Player](https://www.npmjs.com/package/player) - A command line player, supports play mp3 both from url and local stream.
- [Open](https://www.npmjs.com/package/open) - Open stuff like URLs, files, executables. Cross-platform.
- [SendGrid/mail](https://www.npmjs.com/package/@sendgrid/mail) - This is a dedicated service for interaction with the mail endpoint of the SendGrid v3 API.

## Highlights

- Scrapes multiple endpoints and aggregates data for analysis.
- Parses DOM element using cheerio.
- If suitable in stock match is found, opens URL in default browser and sounds alarm on computer.
- Checks for stock every 5 minutes while running.

## Development setup

```sh
npm i
npm run-script run
```

If using SendGrid to send email emails when "stock" is found, you will need to run the following commands to create a .\env file with the corresponding environment variables. Please update the values of each variable before running the shell script. This is step 3 from (https://app.sendgrid.com/guide/integrate/langs/nodejs)
* SENDGRID_API_KEY
* EMAIL_TO
* EMAIL_FROM

```sh
echo "SENDGRID_API_KEY='YOUR_API_KEY'" > .env
echo "EMAIL_TO='YOUR_SEND_ADDRESS'" >> .env
echo "EMAIL_FROM='YOUR_RECEIVE_ADDRESS'" >> .env
echo ".env" >> .gitignore
source ./.env
```

## Article Explaining Logic

- Read an article explaining the logic here: [LinkedIn Post about Logic](https://www.linkedin.com/pulse/how-use-magic-nodejs-secure-playstation-5-xbox-series-bradshaw/?trackingId=AHPUxligQg%2BjB8SdjMrW2A%3D%3D)

## Author

Chris Bradshaw – [@\_chrisbradshaw](https://twitter.com/_chrisbradshaw) – bradshaw.chris@gmail.com

This project is licensed under the MIT License.

[https://github.com/chrisbradshaw](https://github.com/chrisbradshaw/)

## Contributing

1.  Fork it (<https://github.com/chrisbradshaw/xbox-and-ps5-scraper>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request
