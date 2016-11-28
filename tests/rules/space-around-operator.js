'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('space around operator - css', function () {
  var file = lint.file('space-around-operator.css');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-around-operator': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 6);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-around-operator': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 5);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('space around operator - scss', function () {
  var file = lint.file('space-around-operator.scss');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-around-operator': 1
    }, function (data) {
      lint.assert.equal(92, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-around-operator': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(94, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('space around operator - sass', function () {
  var file = lint.file('space-around-operator.sass');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-around-operator': 1
    }, function (data) {
      lint.assert.equal(88, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-around-operator': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(88, data.warningCount);
      done();
    });
  });
});
