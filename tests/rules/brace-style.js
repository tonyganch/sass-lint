'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('brace style - css', function () {
  var file = lint.file('brace-style.css');

  it('[style: 1tbs, allow-single-line: true]', function (done) {
    lint.test(file, {
      'brace-style': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 13);
      done();
    });
  });

  it('[style: 1tbs, allow-single-line: false]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': '1tbs',
          'allow-single-line': false
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 15);
      done();
    });
  });

  it('[style: stroustrup, allow-single-line: true]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'stroustrup',
          'allow-single-line': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 13);
      done();
    });
  });

  it('[style: stroustrup, allow-single-line: false]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'stroustrup',
          'allow-single-line': false
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 15);
      done();
    });
  });

  it('[style: allman, allow-single-line: true]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'allman',
          'allow-single-line': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 26);
      done();
    });
  });

  it('[style: allman, allow-single-line: false]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'allman',
          'allow-single-line': false
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 28);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('brace style - scss', function () {
  var file = lint.file('brace-style.scss');

  it('[style: 1tbs, allow-single-line: true]', function (done) {
    lint.test(file, {
      'brace-style': 1
    }, function (data) {
      lint.assert.equal(40, data.warningCount);
      done();
    });
  });

  it('[style: 1tbs, allow-single-line: false]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': '1tbs',
          'allow-single-line': false
        }
      ]
    }, function (data) {
      lint.assert.equal(62, data.warningCount);
      done();
    });
  });

  it('[style: stroustrup, allow-single-line: true]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'stroustrup',
          'allow-single-line': true
        }
      ]
    }, function (data) {
      lint.assert.equal(44, data.warningCount);
      done();
    });
  });

  it('[style: stroustrup, allow-single-line: false]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'stroustrup',
          'allow-single-line': false
        }
      ]
    }, function (data) {
      lint.assert.equal(66, data.warningCount);
      done();
    });
  });

  it('[style: allman, allow-single-line: true]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'allman',
          'allow-single-line': true
        }
      ]
    }, function (data) {
      lint.assert.equal(81, data.warningCount);
      done();
    });
  });

  it('[style: allman, allow-single-line: false]', function (done) {
    lint.test(file, {
      'brace-style': [
        1,
        {
          'style': 'allman',
          'allow-single-line': false
        }
      ]
    }, function (data) {
      lint.assert.equal(103, data.warningCount);
      done();
    });
  });
});
