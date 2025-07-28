const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

const errChalk = chalk.red.inverse.bold;
const sucChalk = chalk.green.inverse.bold;
const contactPath = "./data/contacts.json";
const dirPath = "./data";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
if (!fs.existsSync(contactPath)) {
  fs.writeFileSync(contactPath, "[]", "utf8");
}

function loadContact() {
  const file = fs.readFileSync(contactPath, "utf8");
  const contacts = JSON.parse(file);
  return contacts;
}

function saveContact(name, email, number) {
  const contact = { name, email, number };
  const contacts = loadContact();

  const duplicate = contacts.find((contact) => contact.name === name);

  if (duplicate) {
    console.log(
      errChalk("Your name is already on the list, please input another one!")
    );
    return false;
  }

  if (email) {
    if (!validator.isEmail(email)) {
      console.log(errChalk("Your Email is not valid!"));
      return false;
    }
  }

  if (!validator.isMobilePhone(number, "id-ID")) {
    console.log(errChalk("Your Phone Number is not valid!"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync(contactPath, JSON.stringify(contacts, null, 2));
  console.log(
    chalk.green.inverse.bold(
      "Your contact has been saved to ./data/contacts.json"
    )
  );
}

function listContacts() {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Your contact list : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name}. ${contact.number}`);
  });
}

function detailContact(name) {
  const contacts = loadContact();
  const locate = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (!locate) {
    console.log(errChalk("Sorry your contact name isnt available"));
  } else {
    console.log(sucChalk(locate.name));
    console.log(locate.email);
    console.log(locate.number);
  }
}

function deleteContact(name) {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.name.toLowerCase() !== name.toLowerCase()
  );
  if (newContacts.length === contacts.length) {
    console.log(errChalk("Sorry your contact name isnt available"));
  } else {
    fs.writeFileSync(contactPath, JSON.stringify(newContacts, null, 2));
    console.log(sucChalk("Your contact has been deleted"));
  }
}
module.exports = { saveContact, listContacts, detailContact, deleteContact };
