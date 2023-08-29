const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;
for (let char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  console.log("");
}, delay);