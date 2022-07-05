const yargs = require("yargs");
const notes = require("./note");

yargs.command({
  command: "add",
  describe: "Add notes",
  builder: {
    title: {
      describe: "This is title description in add command",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is body description in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    notes.addNotes(yargs.argv.title, yargs.argv.body);
  },
});

yargs.command({
  command: "delete",
  describe: "Delete notes command",
  builder: {
    title: {
      describe: "This is body description in delete command",
      demandOption: true,
      type: "string",
    },
  },

  handler: () => {
    notes.deleteNotes(yargs.argv.title);
  },
});
// read
yargs.command({
  command: "read",
  describe: "Read notes command",
  builder: {
    title: {
      describe: "This is body description in read command",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    notes.readNotes(yargs.argv.title)
  },
});

//list
yargs.command({
  command: "list",
  describe: "List notes command",
  handler: () => {
    notes.listNotes()
  },
});
yargs.parse();
// console.log(yargs.argv);
