'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('hex notation - css', function () {
  var file = lint.file('hex-notation.css');

  it('[style: lowercase]', function (done) {
    lint.test(file, {
      'hex-notation': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 5);
      done();
    });
  });

  it('[style: uppercase]', function (done) {
    lint.test(file, {
      'hex-notation': [
        1,
        {
          'style': 'uppercase'
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 6);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('hex notation - scss', function () {
  var file = lint.file('hex-notation.scss');

  it('[style: lowercase]', function (done) {
    lint.test(file, {
      'hex-notation': 1
    }, function (data) {
      lint.assert.equal(6, data.warningCount);
      done();
    });
  });

  it('[style: uppercase]', function (done) {
    lint.test(file, {
      'hex-notation': [
        1,
        {
          'style': 'uppercase'
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
describe('hex notation - sass', function () {
  var file = lint.file('hex-notation.sass');

  it('[style: lowercase]', function (done) {
    lint.test(file, {
      'hex-notation': 1
    }, function (data) {
      lint.assert.equal(6, data.warningCount);
      done();
    });
  });

  it('[style: uppercase]', function (done) {
    lint.test(file, {
      'hex-notation': [
        1,
        {
          'style': 'uppercase'
        }
      ]
    }, function (data) {
      lint.assert.equal(7, data.warningCount);
      done();
    });
  });
});
