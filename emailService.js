const chalk = require('chalk');

const { log } = console;

class EmailService {
  static send(email) {
    log(chalk.black.bgWhite.bold(`\nSending email to ${email}`));
  }
}

module.exports = EmailService;
