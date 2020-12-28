// import module
const HyundaiTucson = require('./hyundaiTucson');

let argv = process.argv[2];
// early return if input missing or not a number
if (!argv || isNaN(argv)) return console.log('Please input a number!')
// creates an instance
let myHyundaiTucson = new HyundaiTucson();
console.log(`The remaing fuel is ${myHyundaiTucson.drive(argv)}`);