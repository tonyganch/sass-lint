'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('space after comma - css', function () {
  var file = lint.file('space-after-comma.css');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-after-comma': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-after-comma': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('space after comma - scss', function () {
  var file = lint.file('space-after-comma.scss');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-after-comma': 1
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-after-comma': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('space after comma - sass', function () {
  var file = lint.file('space-after-comma.sass');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-after-comma': 1
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-after-comma': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });
});
