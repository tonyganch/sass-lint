'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no important - css', function () {
  var file = lint.file('no-important.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-important': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 1);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no important - scss', function () {
  var file = lint.file('no-important.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-important': 1
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no important - sass', function () {
  var file = lint.file('no-important.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-important': 1
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});
