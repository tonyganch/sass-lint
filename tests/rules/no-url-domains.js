'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no url domains - css', function () {
  var file = lint.file('no-url-domains.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-url-domains': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no url domains - scss', function () {
  var file = lint.file('no-url-domains.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-url-domains': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no url domains - sass', function () {
  var file = lint.file('no-url-domains.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-url-domains': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });
});
