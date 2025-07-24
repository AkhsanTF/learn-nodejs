const yargs = require("yargs");
const {
  saveContact,
  listContacts,
  detailContact,
  deleteContact,
} = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Adding a new contact",
    builder: {
      name: {
        describe: "Full Name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      phone: {
        describe: "Phone Number",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      saveContact(argv.name, argv.email, argv.phone);
    },
  })
  .demandCommand();

yargs.command({
  command: "list",
  describe: "Show all contact name & number",
  handler() {
    listContacts();
  },
});

yargs.command({
  command: "detail",
  describe: "Show detailed contact of given name",
  builder: {
    name: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.name);
  },
});

yargs.command({
  command: "delete",
  desccribe: "Delete contact of given name".replace,
  builder: {
    name: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.name);
  },
});

yargs.parse();
