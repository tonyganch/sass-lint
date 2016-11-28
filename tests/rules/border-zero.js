'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('border zero - css', function () {
  var file = lint.file('border-zero.css');

  it('[convention: 0]', function (done) {
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 0
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });

  it('[convention: \'0\']', function (done) {
    lint.test(file, {
      'border-zero': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });

  it('[convention: \'none\']', function (done) {
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 'none'
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 2);
      done();
    });
  });

  it('invalid convention [convention: \'zero\']', function (done) {
    // defaults to convention 0
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 'zero'
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 4);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('border zero - scss', function () {
  var file = lint.file('border-zero.scss');

  it('[convention: 0]', function (done) {
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 0
        }
      ]
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[convention: \'0\']', function (done) {
    lint.test(file, {
      'border-zero': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[convention: \'none\']', function (done) {
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 'none'
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('invalid convention [convention: \'zero\']', function (done) {
    // defaults to convention 0
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 'zero'
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
describe('border zero - sass', function () {
  var file = lint.file('border-zero.sass');

  it('[convention: 0]', function (done) {
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 0
        }
      ]
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[convention: \'0\']', function (done) {
    lint.test(file, {
      'border-zero': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[convention: \'none\']', function (done) {
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 'none'
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('invalid convention [convention: \'zero\']', function (done) {
    // defaults to convention 0
    lint.test(file, {
      'border-zero': [
        1,
        {
          'convention': 'zero'
        }
      ]
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });
});
