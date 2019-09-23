const yargs = require("yargs");
const commands = require("./commands");

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
            alias: 't'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
            alias: 'b'
        }
    },
    handler(argv) {
        if (argv.title && argv.body) {
            commands.add(argv.title, argv.body);
        }
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
            alias: 't'
        }
    },
    handler(argv) {
        if (argv.title) {
            commands.remove(argv.title);
        }
    }
});

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        commands.list();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
            alias: 't'
        }
    },
    handler(argv) {
        if (argv.title) {
            commands.read(argv.title)
        }
    }
});

yargs.parse();