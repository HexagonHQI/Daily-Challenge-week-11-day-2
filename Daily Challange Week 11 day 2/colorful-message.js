// colorful-message.js
const chalk = require('chalk');

function colorfulMessage() {
  console.log(chalk.blue('Hello') + ' ' + chalk.red('World') + '!');
}

module.exports = colorfulMessage;
