'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('bem depth - css', function () {
  var file = lint.file('bem-depth.css');

  // silly case to raise a warning for every selector/placeholder
  it('[max-depth: 0]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 0 }]
    }, function (data) {
      lint.assert.equal(data.warningCount, 10);
      done();
    });
  });

  it('[max-depth: 1]', function (done) {
    lint.test(file, {
      'bem-depth': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 5);
      done();
    });
  });

  it('[max-depth: 2]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 2 }]
    }, function (data) {
      lint.assert.equal(data.warningCount, 1);
      done();
    });
  });

  it('[max-depth: 3]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 3 }]
    }, function (data) {
      lint.assert.equal(data.warningCount, 0);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('bem depth - scss', function () {
  var file = lint.file('bem-depth.scss');

  // silly case to raise a warning for every selector/placeholder
  it('[max-depth: 0]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 0 }]
    }, function (data) {
      lint.assert.equal(12, data.warningCount);
      done();
    });
  });

  it('[max-depth: 1]', function (done) {
    lint.test(file, {
      'bem-depth': 1
    }, function (data) {
      lint.assert.equal(6, data.warningCount);
      done();
    });
  });

  it('[max-depth: 2]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 2 }]
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });

  it('[max-depth: 3]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 3 }]
    }, function (data) {
      lint.assert.equal(0, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('bem depth - sass', function () {
  var file = lint.file('bem-depth.sass');

  // silly case to raise a warning for every selector/placeholder
  it('[max-depth: 0]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 0 }]
    }, function (data) {
      lint.assert.equal(12, data.warningCount);
      done();
    });
  });

  it('[max-depth: 1]', function (done) {
    lint.test(file, {
      'bem-depth': 1
    }, function (data) {
      lint.assert.equal(6, data.warningCount);
      done();
    });
  });

  it('[max-depth: 2]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 2 }]
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });

  it('[max-depth: 3]', function (done) {
    lint.test(file, {
      'bem-depth': [1, { 'max-depth': 3 }]
    }, function (data) {
      lint.assert.equal(0, data.warningCount);
      done();
    });
  });
});
