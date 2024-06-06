// Jiří Pölzer 1.A CHEATSHEET pro JavaScript
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Kolik ti je: ", (age) => {
    if (age >= 18) {
      console.log("můžeš jit");
    } else {
      console.log("nemužeš jdi pryč");
    }
    readline.close();
  });