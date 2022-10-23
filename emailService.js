const chalk = require('chalk');

const { log } = console;

class EmailService {
  send(email) {
    log(chalk.black.bgWhite.bold(`\nSending email to ${email}`));
  }
}

module.exports = EmailService;
