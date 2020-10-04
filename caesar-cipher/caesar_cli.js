const repl = require('repl');
const args = require('minimist')(process.argv.slice(2));
const { caesar } = require('./caesar.js');
const { streams } = require('./streams.js');

streams(args, caesar);
