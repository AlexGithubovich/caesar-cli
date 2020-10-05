const args = require('minimist')(process.argv.slice(2));
const { caesar } = require('./caesar.js');
const { streams } = require('./streams.js');
const { checkForFilesExistence } = require('./utils.js');

function start(args) {
  if (checkForFilesExistence(args)) {
    streams(args, caesar);
  }
}
start(args);
