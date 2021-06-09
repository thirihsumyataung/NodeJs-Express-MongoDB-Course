// We install npm validator
// npm i validator 

const validator = require('validator');
const myNote = require('./notes.js');

const message = myNote();
console.log(message);

console.log(validator.isEmail(`thiri@example.com`));
console.log(validator.isEmail(`example.com`));

console.log(validator.isURL(`https://media.io`));
console.log(validator.isURL(`https:media.io`)); 


