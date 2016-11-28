'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no misspelled properties - css', function () {
  var file = lint.file('no-misspelled-properties.css');

  it('[default]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 4);
      done();
    });
  });

  it('[extra-properties: transit1on]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': [
        1,
        {
          'extra-properties': [
            'transit1on'
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 2);
      done();
    });
  });

  it('[extra-properties: transit1on, colors]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': [
        1,
        {
          'extra-properties': [
            'transit1on',
            'colors'
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 1);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no misspelled properties - scss', function () {
  var file = lint.file('no-misspelled-properties.scss');

  it('[default]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': 1
    }, function (data) {
      lint.assert.equal(7, data.warningCount);
      done();
    });
  });

  it('[extra-properties: transit1on]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': [
        1,
        {
          'extra-properties': [
            'transit1on'
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('[extra-properties: transit1on, colors]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': [
        1,
        {
          'extra-properties': [
            'transit1on',
            'colors'
          ]
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
describe('no misspelled properties - sass', function () {
  var file = lint.file('no-misspelled-properties.sass');

  it('[default]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': 1
    }, function (data) {
      lint.assert.equal(7, data.warningCount);
      done();
    });
  });

  it('[extra-properties: transit1on]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': [
        1,
        {
          'extra-properties': [
            'transit1on'
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(5, data.warningCount);
      done();
    });
  });

  it('[extra-properties: transit1on, colors]', function (done) {
    lint.test(file, {
      'no-misspelled-properties': [
        1,
        {
          'extra-properties': [
            'transit1on',
            'colors'
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });
});
