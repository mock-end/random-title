'use strict';

var capitalize     = require('capitalize');
var randomSentence = require('random-sentence');

module.exports = function (options) {
  return capitalize(randomSentence(options));
};
