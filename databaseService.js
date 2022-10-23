const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  save(email, price, timestamp) {
    log(
      chalk.black.bgWhite.bold(
        `Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})\n`
      )
    );
  }
}

module.exports = DatabaseService;
