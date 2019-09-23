const yargs = require("yargs");
const commands = require("./commands");

const argv = yargs.command("add", "Adds a new note", {
    noteTitle: {
        describe: "Title of note",
        alias: "t",
        demandOption: true
    },
    noteBody: {
        describe: "Body of note",
        alias: "b",
        demandOption: true
    }
})
    .command("remove", "Remove note", {
        noteTitle: {
            describe: "Title of note",
            alias: "t",
            demandOption: true
        }
    })
    .command("read", "Read note", {
        noteTitle: {
            describe: "Title of note",
            alias: "r",
            demandOption: true
        }
    })
    .command("list", "list of  all titles and bodies")
    .help()
    .alias("help", "h");

let argument = argv.argv._[0];
let noteTitle = argv.argv.noteTitle;
let noteBody = argv.argv.noteBody;

switch (argument) {
    case "add":
        if (noteTitle && noteBody) {
            commands.add(noteTitle, noteBody);
        }
        break;
    case "remove":
        if (noteTitle) {
            commands.remove(noteTitle);
        }
        break;
    case "list":
        commands.list();
        break;
    case "read":
        if (noteTitle) {
            commands.read(noteTitle)
        }
        break;
    default:
        console.log("ok, this doesnt make any sense");
}