'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no attribute selectors - css', function () {
  var file = lint.file('no-attribute-selectors.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-attribute-selectors': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 21);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no attribute selectors - scss', function () {
  var file = lint.file('no-attribute-selectors.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-attribute-selectors': 1
    }, function (data) {
      lint.assert.equal(18, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no attribute selectors - sass', function () {
  var file = lint.file('no-attribute-selectors.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-attribute-selectors': 1
    }, function (data) {
      lint.assert.equal(18, data.warningCount);
      done();
    });
  });
});
