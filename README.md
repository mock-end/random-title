# random-title

> Return a random title populated by semi-pronounceable random (nonsense) words.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-title/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-title/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-title)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-title/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-title)


## Install

```
$ npm install --save random-title
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-title/blob/master/test/spec/index.js)


```js
var randomTitle = require('random-title');

// API
// - randomTitle();
// - randomTitle(max);
// - randomTitle(min, max);
```

By default, the worlds count of the title would between `2` and `20`:

```js
randomTitle();
// => Morbi Leo Cisus Porta Ac Consectetur Vestibulum Eros.
```

Can optionally provide max, and the worlds count would be between `2` and `max`:

```js
randomTitle(8);
// => Fusce Dapibus Tellus Cursus Commodo.
```

Can optionally provide both min and max:

```js
randomTitle(4, 9);
// => Dolor Sit Amet Consectetur Adipiscing Elit.

randomTitle(5, 5); // should only have 5 worlds.
// => Maecenas Faucibus Mollis Interdum Asd.
```

**Note**: these min and max are **inclusive**, so they are included in the range. 



## Related


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-title/issues/new).
