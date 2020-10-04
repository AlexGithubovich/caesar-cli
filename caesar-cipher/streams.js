const fs = require('fs');
const { pipeline, Transform } = require('stream');
const path = require('path');
const { checkRequiredArgs } = require('./utils.js');

function streams(args, caesar) {
  if (!checkRequiredArgs(args)) return;

  const shift = args.s ? args.s : args.shift;
  const action = args.a ? args.a : args.action;
  const input = args.i ? args.i : args.input;
  const output = args.o ? args.o : args.output;

  const input_stream = input
    ? fs.createReadStream(path.join(__dirname, input), 'utf-8')
    : process.stdin;

  const transform_stream2 = new Transform({
    transform: (chunk, encoding, callback) => {
      let data = caesar(chunk.toString(), shift, action);

      callback(null, data);
    },
  });

  const output_stream = output
    ? fs.createWriteStream(path.join(__dirname, output), {
        flags: 'a+',
      })
    : process.stdout;

  return pipeline(input_stream, transform_stream2, output_stream, (err) => {
    if (err) {
      console.error('Fail! Pipeline', err);
    } else {
      console.log('Success!');
    }
  });
}

module.exports.streams = streams;
