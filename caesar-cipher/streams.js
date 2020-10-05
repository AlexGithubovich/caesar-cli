const fs = require('fs');
const { pipeline, Transform } = require('stream');
const path = require('path');
const { checkRequiredArgs, checkArgsForExistence } = require('./utils.js');

function streams(args, caesar) {
  if (!checkRequiredArgs(args)) {
    console.log('checkRequiredArgs');
  }

  const localArgs = {
    shift: args.s ? args.s : args.shift,
    action: args.a ? args.a : args.action,
    input: args.i ? args.i : args.input,
    output: args.o ? args.o : args.output,
  };
  // console.log(localArgs);
  if (checkArgsForExistence(localArgs)) {
    const input_stream = localArgs.input
      ? fs.createReadStream(
          path.join(__dirname, localArgs.input).toString(),
          'utf-8'
        )
      : process.stdin;

    const transform_stream2 = new Transform({
      transform: (chunk, encoding, callback) => {
        let data = caesar(
          chunk.toString(),
          Number(localArgs.shift),
          localArgs.action.toString()
        );

        callback(null, data);
      },
    });

    const output_stream = localArgs.output
      ? fs.createWriteStream(
          path.join(__dirname, localArgs.output.toString()),
          {
            flags: 'a+',
          }
        )
      : process.stdout;

    return pipeline(input_stream, transform_stream2, output_stream, (err) => {
      if (err) {
        console.error('Fail! Pipeline', err);
      } else {
        console.log('Success!');
      }
    });
  }
}

module.exports.streams = streams;
