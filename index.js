'use strict';

var capitalize     = require('capitalize');
var randomSentence = require('random-sentence');

module.exports = function (min, max) {
  return capitalize(randomSentence(min, max));
};
