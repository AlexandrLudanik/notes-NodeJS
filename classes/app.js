const yargs = require("yargs");
const commands = require("./commands");

let command = yargs.argv._[0];
let noteTitle = yargs.argv.noteTitle;
let noteBody = yargs.argv.noteBody;
if (command === "add") {
    if (noteTitle && noteBody) {
        commands.add(noteTitle, noteBody);
    }
} else if (command === "remove") {
    if (noteTitle) {
        commands.remove(noteTitle);
    }
} else if (command === "list") {
    commands.list();
} else {
    console.log("ok, this doesnt make any sense");
}