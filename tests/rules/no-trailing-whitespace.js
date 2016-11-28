'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no trailing whitespace - css', function () {
  var file = lint.file('no-trailing-whitespace.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-trailing-whitespace': 1
    }, function (data) {
      console.log(data);
      lint.assert.equal(data.warningCount, 5);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no trailing whitespace - scss', function () {
  var file = lint.file('no-trailing-whitespace.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-trailing-whitespace': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no trailing whitespace - sass', function () {
  var file = lint.file('no-trailing-whitespace.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-trailing-whitespace': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });
});
