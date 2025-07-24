const { question, saveContact } = require("./contacts.js");

const questions = async () => {
  const name = await question("What is ur name? ");
  const age = await question("How old are u? ");
  const email = await question("What is ur email? ");

  saveContact(name, age, email);
};

questions();
