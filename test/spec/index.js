var expect = require('chai').expect;

var MIN_LEN = 2;
var MAX_LEN = 18;

describe('random-title: ', function () {

  var randomTitle = require('../../');

  it('randomTitle()', function () {

    expect(randomTitle()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomTitle().split(' ')).to.have.length.within(MIN_LEN, MAX_LEN);
    }
  });

  it('randomTitle({ words: 8 })', function () {
    expect(randomTitle({ words: 8 }).split(' ')).to.have.length(8);
  });

  it('randomTitle({ min: 8, max: 12 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomTitle({
        min: 8,
        max: 12
      }).split(' ')).to.have.length.within(8, 12);
    }
  });

  it('randomTitle({ max: 12 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomTitle({
        max: 12
      }).split(' ')).to.have.length.within(MIN_LEN, 12);
    }
  });

  it('randomTitle({ min: 8 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomTitle({
        min: 8
      }).split(' ')).to.have.length.within(8, MAX_LEN);
    }
  });

  it('randomTitle({ min: "0", max: "0" })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomTitle({
        min: '0',
        max: '0'
      }).split(' ')).to.have.length.within(MIN_LEN, MAX_LEN);
    }
  });
});
