const fs = require("fs");
const readline = require("readline");

const { stdin: input, stdout: output } = require("process");
const contactPath = "./data/contacts.json";
const rl = readline.createInterface({ input, output });

if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}
if (!fs.existsSync(contactPath)) {
  fs.writeFileSync(contactPath, "[]", "utf8");
}

function question(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (value) => {
      resolve(value);
    });
  });
}

function saveContact(name, age, email) {
  const contact = { name, age, email };
  const file = fs.readFileSync(contactPath, "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync(contactPath, JSON.stringify(contacts, null, 2));
  console.log("ur file have been written in contacts.json");
  rl.close();
}

module.exports = { saveContact, question };
