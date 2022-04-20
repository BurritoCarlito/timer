let alarm = process.argv.slice(2);

for (const secs of alarm) {
  setTimeout(() => {
    if (!isNaN(secs) && secs >= 1) {
    } process.stdout.write('\x07');
  }, (secs * 1000));
};