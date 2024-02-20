const characters = Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i))
    .concat(Array.from({ length: 26 }, (_, j) => String.fromCharCode(65 + j))
    .concat(Array.from({ length: 26 }, (_, k) => String.fromCharCode(97 + k))));

console.log("                                     - Nitro generator");
console.log(" ");
console.log("Here is the operating principle of the generator:");
console.log(" ");
console.log("1. Choose the number of codes to generate");
console.log(" ");
console.log("2. Wait for the codes to be generated");
console.log(" ");
console.log("3. Once the codes are created, go back to the file and click on the .txt file");
console.log(" ");
console.log("4. Your codes are ready to be used");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("all rights reserved - skayoex generator");
console.log(" ");
console.log(" ");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Number of codes to generate? ", (num) => {
    const numToGenerate = parseInt(num);
    for (let i = 0; i < numToGenerate; i++) {
        const nitrocode = Array.from({ length: 16 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
        console.log(`https://discord.gift/${nitrocode}`);

        const fs = require('fs');
        fs.appendFileSync("nitros.txt", `https://discord.gift/${nitrocode}\n`);
    }

    rl.close();
});
