'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('trailing semicolon - css', function () {
  var file = lint.file('trailing-semicolon.css');

  it('[include: true]', function (done) {
    lint.test(file, {
      'trailing-semicolon': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'trailing-semicolon': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 0);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('trailing semicolon - scss', function () {
  var file = lint.file('trailing-semicolon.scss');

  it('[include: true]', function (done) {
    lint.test(file, {
      'trailing-semicolon': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'trailing-semicolon': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});
