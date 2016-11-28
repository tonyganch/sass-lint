'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no universal selectors - css', function () {
  var file = lint.file('no-universal-selectors.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-universal-selectors': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 6);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no universal selectors - sass', function () {
  var file = lint.file('no-universal-selectors.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-universal-selectors': 1
    }, function (data) {
      lint.assert.equal(6, data.warningCount);
      done();
    });
  });
});
