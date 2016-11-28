'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('space before brace - css', function () {
  var file = lint.file('space-before-brace.css');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-before-brace': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 1);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-before-brace': [
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
describe('space before brace - scss', function () {
  var file = lint.file('space-before-brace.scss');

  it('[include: true]', function (done) {
    lint.test(file, {
      'space-before-brace': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('[include: false]', function (done) {
    lint.test(file, {
      'space-before-brace': [
        1,
        {
          'include': false
        }
      ]
    }, function (data) {
      lint.assert.equal(11, data.warningCount);
      done();
    });
  });
});
