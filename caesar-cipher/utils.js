const fs = require('fs');

function checkRequiredArgs(args) {
  if (!args) {
    process.stderr.write('No arguments! Check README!');
    return false;
  }
  if (!args.a && !args.action) {
    process.stderr.write('No -a / --action argument! Check README!');
    return false;
  }
  if (!args.s && !args.shift) {
    process.stderr.write('No -s / --shift argument! Check README!');
    return false;
  }

  return true;
}
function checkArgsForExistence(argsObj) {
  for (const [key, value] of Object.entries(argsObj)) {
    if (typeof value === 'boolean') {
      process.stderr.write('Enter a correct argument value. Check README!');
      return false;
    }
  }
  // if (typeof argsObj.input !== 'string' && typeof argsObj.output !== 'string') {
  //   process.stderr.write('input/output argument error. Check README!');
  //   return false;
  // }
  if (typeof argsObj.shift !== 'number') {
    process.stderr.write('shift argument error. Check README!');
    return false;
  }
  if (typeof argsObj.action !== 'string') {
    process.stderr.write('action argument error. Check README!');
    return false;
  }
  return true;
}
function checkForFilesExistence(args) {
  const output = args.o ? args.o : args.output;
  const input = args.i ? args.i : args.input;
  // console.log(input, output);
  if (typeof output === 'boolean') {
    process.stderr.write(`Wrong output argument. Check README!`);
    return false;
  }
  if (typeof input === 'boolean') {
    process.stderr.write(`Wrong input argument. Check README!`);
    return false;
  }
  if (output) {
    // fs.access(output, fs.constants.F_OK, (err) => {
    //   if (err) {
    //     process.stderr.write(
    //       `Output file does not exist or wrong path, create file(s) first. Check README!`
    //     );
    //     return false;
    //   }
    // });
    try {
      fs.accessSync(output, fs.constants.F_OK);
    } catch (err) {
      process.stderr.write(
        `Output file does not exist or wrong path, create file(s) first. Check README!`
      );
      return false;
    }
  }
  if (input) {
    // fs.access(input, fs.constants.F_OK, (err) => {
    //   if (err) {
    //     process.stderr.write(
    //       `Input file does not exist or wrong path, create file(s) first. Check README!`
    //     );
    //     return false;
    //   }
    // });
    try {
      fs.accessSync(input, fs.constants.F_OK);
    } catch (err) {
      process.stderr.write(
        `input file does not exist or wrong path, create file(s) first. Check README!`
      );
      return false;
    }
  }
  return true;
}

module.exports.checkRequiredArgs = checkRequiredArgs;
module.exports.checkArgsForExistence = checkArgsForExistence;
module.exports.checkForFilesExistence = checkForFilesExistence;
