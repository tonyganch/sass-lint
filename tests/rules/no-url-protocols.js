'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no url protocols - css', function () {
  var file = lint.file('no-url-protocols.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-url-protocols': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });

  it('[allow-protocol-relative-urls: true]', function (done) {
    lint.test(file, {
      'no-url-protocols': [
        1,
        {
          'allow-protocol-relative-urls': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 2);
      done();
    });
  });
});


//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no url protocols - scss', function () {
  var file = lint.file('no-url-protocols.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-url-protocols': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[allow-protocol-relative-urls: true]', function (done) {
    lint.test(file, {
      'no-url-protocols': [
        1,
        {
          'allow-protocol-relative-urls': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });
});


//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no url protocols - sass', function () {
  var file = lint.file('no-url-protocols.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-url-protocols': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[allow-protocol-relative-urls: true]', function (done) {
    lint.test(file, {
      'no-url-protocols': [
        1,
        {
          'allow-protocol-relative-urls': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });
});
