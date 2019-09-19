const fs = require("fs");
const file = "note.json"
const readFile = fileName => {
    try {
        return JSON.parse(fs.readFileSync(fileName));
    } catch (e) {
        return [];
    }
};
const writeFile = (fileName, content) => {
    try {
        fs.writeFileSync(fileName, JSON.stringify(content));
        console.log("success");
    } catch (e) {
        console.log(e);
    }
};
const add = (noteTitle, noteBody) => {
    let note = readFile(file);
    let index = note.findIndex(x => x.title === noteTitle);
    if (index === -1) {
        note.push({title: noteTitle, body: noteBody});
    } else {
        note[index].body += noteBody;
    }
    writeFile(file, note);
};
const remove = noteTitle => {
    let note = readFile(file);
    const filteredList = note.filter(x => x.title !== noteTitle);
    writeFile(file, filteredList);
};
const list = () => {
    let note = readFile(file);
    console.log(note);
};
module.exports = {
    add,
    remove,
    list
};