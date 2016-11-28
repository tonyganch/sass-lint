'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('space before bang - css', function () {
  var file = lint.file('space-before-bang.css');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-before-bang': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 2);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-before-bang': [
        1,
        {
          'include': false
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
describe('space before bang - scss', function () {
  var file = lint.file('space-before-bang.scss');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-before-bang': 1
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-before-bang': [
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
describe('space before bang - sass', function () {
  var file = lint.file('space-before-bang.sass');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-before-bang': 1
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-before-bang': [
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
