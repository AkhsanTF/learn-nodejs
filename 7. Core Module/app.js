// Core Module
// File System
const fs = require("fs");
const Module = require("module");

//Read Line
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

// menuliskan string ke file secara synchronous
// try {
//   fs.writeFileSync("data/test.txt", "Hello world lagi");
// } catch (error) {
//   console.log(error);
// }

// menuliskan string ke file secara asynchronous
// fs.writeFile("async/test.txt", "Hello world secara asynchronous", (err) => {
//   if (err) throw err;
//   console.log("File had been saved");
// });

//membaca isi file secara synchronous
// const readSync = fs.readFileSync("test.txt", "utf8");
// console.log(readSync);

//membaca isi file secara asynchronous
// fs.readFile("asyncs/test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//coba readline command prompt
const rl = readline.createInterface({ input, output });

// rl.question("what do u think about node.js?", (ans) => {
//     console.log(`thanks for ur feedback! : ${ans}`);
//     rl.close();
// });

rl.question("What is ur name?", (name) => {
  rl.question("What is ur age?", (age) => {
    const contact = { name, age };
    const file = fs.readFileSync("contacts.json", "utf8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("contacts.json", JSON.stringify(contacts, null, 2));
    console.log("ur file have been written in contacts.json");
    rl.close();
  });
});
