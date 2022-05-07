const textsWrapper = require('./');

const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod',
    'nunc euismod, euismod nunc euismod, euismod nunc euismod, euismod'
];

console.log(textsWrapper(texts[0], { width: 20 }));
console.log('------------------------')
console.log(textsWrapper(texts[1], { width: 20 }));
console.log('------------------------')
console.log(textsWrapper(texts[1], { width: 10 }));