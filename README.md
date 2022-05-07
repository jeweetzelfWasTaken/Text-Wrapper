# Texts-Wrapper
Texts-Wrapper is a package that wraps big, chunky texts into smaller texts 👍.

# Examples
```js
const textsWrapper = require('texts-wrapper');

const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod',
    'nunc euismod, euismod nunc euismod, euismod nunc euismod, euismod'
];

console.log(textsWrapper(texts[0], { width: 20 }));
// => Lorem ipsum dolor
// => sit amet,
// => consectetur
// => adipiscing elit. Sed
// => euismod

console.log(textsWrapper(texts[1], { width: 20 }));
// => nunc euismod,
// => euismod nunc
// => euismod, euismod
// => nunc euismod,
// => euismod

console.log(textsWrapper(texts[1], { width: 10 }));
// => nunc
// => euismod,
// => euismod
// => nunc
// => euismod,
// => euismod
// => nunc
// => euismod,
// => euismod
```

You can only get support in the GitHub repository. Further support will not be given.