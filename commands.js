const fs = require("fs");
const file = "note.json";

const readFile = fileName => {
    if (fs.existsSync(file)) {
        return JSON.parse(fs.readFileSync(fileName));
    } else {
        return [];
    }
};

const writeFile = (fileName, content) => {
    fs.writeFileSync(fileName, JSON.stringify(content));
    console.log("success");
};

const add = (noteTitle, noteBody) => {
    const note = readFile(file);
    const index = note.findIndex(x => x.title === noteTitle);
    if (index === -1) {
        note.push({title: noteTitle, body: noteBody});
    } else {
        note[index].body += noteBody;
    }
    writeFile(file, note);
};

const remove = noteTitle => {
    const note = readFile(file);
    const filteredList = note.filter(x => x.title !== noteTitle);
    writeFile(file, filteredList);
};

const list = () => {
    const notes = readFile(file);
    notes.forEach(note => {
        console.log(note.title);
        console.log(note.body);
        console.log('====================');
    });
};

const read = (noteTitle) => {
    const notes = readFile(file);
    const noteToList = notes.find(note => note.title === noteTitle);
    console.log(noteToList.body)
};

module.exports = {
    add,
    remove,
    list,
    read
};