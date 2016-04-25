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

```js
var randomTitle = require('random-title');

// API
// - randomTitle([options]);

// options
// - words
// - min
// - max
```

The sentence starts with a capital letter, and ends with a period.

Default is a sentence with a random number of words from `12` to `18`.

*This length is chosen as the default as it works out to the average English sentence is in that range.*

```js
randomTitle();
// => 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne.'
```

Optionally specify the number of words in the sentence:

```js
randomTitle({words: 5});
// => 'Waddik jeasmov cakgilta ficub up.'
```

Can optionally provide `min` and `max`, then with a random words count:

```js
randomTitle({min: 4, max: 9});
// => 'Fusce dapibus tellus ac cursus commodo.'
```

**Note**: these min and max are **inclusive**, so they are included in the range. 


## Related

- [random-sentence](https://github.com/mock-end/random-sentence) - Return a random sentence populated by semi-pronounceable random (nonsense) words.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.
- [random-syllable](https://github.com/mock-end/random-syllable) - Return a semi-speakable syllable, 2 or 3 letters.
- [random-lorem](https://github.com/mock-end/random-lorem) - Return a semi-pronounceable random (nonsense) word.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-title/issues/new).
