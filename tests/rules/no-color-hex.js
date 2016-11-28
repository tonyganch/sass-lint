'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no color hex - css', function () {
  var file = lint.file('no-color-hex.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-color-hex': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 9);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no color hex - scss', function () {
  var file = lint.file('no-color-hex.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-color-hex': 1
    }, function (data) {
      lint.assert.equal(9, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no color hex - sass', function () {
  var file = lint.file('no-color-hex.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-color-hex': 1
    }, function (data) {
      lint.assert.equal(9, data.warningCount);
      done();
    });
  });
});
