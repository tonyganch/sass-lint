'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no invalid hex - css', function () {
  var file = lint.file('no-invalid-hex.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-invalid-hex': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 12);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no invalid hex - scss', function () {
  var file = lint.file('no-invalid-hex.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-invalid-hex': 1
    }, function (data) {
      lint.assert.equal(16, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no invalid hex - sass', function () {
  var file = lint.file('no-invalid-hex.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-invalid-hex': 1
    }, function (data) {
      lint.assert.equal(16, data.warningCount);
      done();
    });
  });
});
