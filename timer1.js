let alarm = process.argv.slice(2);
let delay = 0;

for (const secs of alarm) {
  setTimeout(() => {
    if (!isNaN(secs) && secs >= 1) {
    } process.stdout.write('\x07');
  }, delay);
  delay += (secs * 1000);
};