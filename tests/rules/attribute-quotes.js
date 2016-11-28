'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('attribute-quotes - css', function () {
  var file = lint.file('attribute-quotes.css');

  it('[default] include [include: true]', function (done) {
    lint.test(file, {
      'attribute-quotes': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 5);
      done();
    });
  });

  it('exclude [include: false]', function (done) {
    lint.test(file, {
      'attribute-quotes': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 7);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('attribute-quotes - scss', function () {
  var file = lint.file('attribute-quotes.scss');

  it('[default] include [include: true]', function (done) {
    lint.test(file, {
      'attribute-quotes': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('exclude [include: false]', function (done) {
    lint.test(file, {
      'attribute-quotes': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(7, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('attribute-quotes - sass', function () {
  var file = lint.file('attribute-quotes.scss');

  it('[default] include [include: true]', function (done) {
    lint.test(file, {
      'attribute-quotes': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('exclude [include: false]', function (done) {
    lint.test(file, {
      'attribute-quotes': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(7, data.warningCount);
      done();
    });
  });
});
