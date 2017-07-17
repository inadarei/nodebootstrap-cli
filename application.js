const yargs = require('yargs');

var argv = yargs.argv;

let greetingName = argv._.length > 0 ? argv._[0] : "stranger";
console.log(`Hello, ${greetingName}`);
console.log('Arguments passed to this app are: ');
console.dir(argv);