'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('url quotes - css', function () {
  var file = lint.file('url-quotes.css');

  it('enforce', function (done) {
    lint.test(file, {
      'url-quotes': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 1);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('url quotes - scss', function () {
  var file = lint.file('url-quotes.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'url-quotes': 1
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('url quotes - sass', function () {
  var file = lint.file('url-quotes.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'url-quotes': 1
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});
