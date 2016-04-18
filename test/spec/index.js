'use strict';

var expect = require('chai').expect;


describe('random-title: ', function () {

  var randomTitle = require('../../');

  it('randomTitle()', function () {
    expect(randomTitle()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomTitle().split(' ')).to.have.length.within(1, 20);
    }
  });


  it('randomTitle(8)', function () {
    expect(randomTitle(8).split(' ')).to.have.length.within(1, 8);
  });

  it('randomTitle(8, 8)', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomTitle(8, 8).split(' ').length).to.be.equal(8);
    }
  });
});
