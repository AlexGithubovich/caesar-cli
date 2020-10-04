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

module.exports.checkRequiredArgs = checkRequiredArgs;
