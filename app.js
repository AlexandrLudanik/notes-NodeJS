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
    .command('list', 'list of  all titles and bodies')
    .help()
    .alias("help", "h");

let argument = argv.argv._[0];
let noteTitle = argv.argv.noteTitle;
let noteBody = argv.argv.noteBody;

if (argument === "add") {
    if (noteTitle && noteBody) {
        commands.add(noteTitle, noteBody);
    }
} else if (argument === "remove") {
    if (noteTitle) {
        commands.remove(noteTitle);
    }
} else if (argument === "list") {
    commands.list();
} else {
    console.log("ok, this doesnt make any sense");
}