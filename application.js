const path = require('path');
const yargs = require('yargs');
let argv = yargs.argv;

// Make it easy to load modules from the 'lib' folder:
require('app-module-path').addPath(path.join(__dirname,'/lib'));
let Something = require('logic'); // a module from /lib 

let greetingName = argv._.length > 0 ? argv._[0] : "stranger";
console.log(`Hello, ${greetingName}`);
console.log('Arguments passed to this app are: ');
console.dir(argv);

let someObj = new Something("And we used a class from a library module");
someObj.say();