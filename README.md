# xbox-and-ps5-scraper

Scrapes stock checker for Xbox Series X and PS5 inventory and sounds alarm when in stock

## Built With

- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [Cheerio](https://www.npmjs.com/package/cheerio) - Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [Player](https://www.npmjs.com/package/player) - A command line player, supports play mp3 both from url and local stream.
- [Open](https://www.npmjs.com/package/open) - Open stuff like URLs, files, executables. Cross-platform.

## Highlights

- Scrapes multiple endpoints and aggregates data for analysis.
- Parses DOM element using cheerio.
- If suitable in stock match is found, opens URL in default browser and sounds alarm on computer.
- Checks for stock every 5 minutes while running.

## Development setup

```sh
npm i
node app.js
```

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
