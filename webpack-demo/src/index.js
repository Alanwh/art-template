const template = require('./template.art');

const text = 'Hello World!';

document.getElementById('wrapper').innerHTML = template({ text: text,name: 'Iverson',age: 12 });