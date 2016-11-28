'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe.skip('max-line-length - css', function () {
  var file = lint.file('max-line-length.css');

  it('enforce [default]', function (done) {
    lint.test(file, {
      'max-line-length': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 4);
      done();
    });
  });

  it('enforce [length: 79]', function (done) {
    lint.test(file, {
      'max-line-length': [
        1,
        {
          length: 79
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 7);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('max-line-length - scss', function () {
  var file = lint.file('max-line-length.scss');

  it('enforce [default]', function (done) {
    lint.test(file, {
      'max-line-length': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('enforce [length: 79]', function (done) {
    lint.test(file, {
      'max-line-length': [
        1,
        {
          length: 79
        }
      ]
    }, function (data) {
      lint.assert.equal(8, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('max-line-length - sass', function () {
  var file = lint.file('max-line-length.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'max-line-length': 1
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('enforce [length: 79]', function (done) {
    lint.test(file, {
      'max-line-length': [
        1,
        {
          length: 79
        }
      ]
    }, function (data) {
      lint.assert.equal(8, data.warningCount);
      done();
    });
  });
});
