'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('shorthand values - css', function () {
  var file = lint.file('shorthand-values.css');

  it('[default]', function (done) {
    lint.test(file, {
      'shorthand-values': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 59);
      done();
    });
  });

  it('[allowed: 1]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 24);
      done();
    });
  });

  it('[allowed: 2]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            2
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 29);
      done();
    });
  });

  it('[allowed: 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 35);
      done();
    });
  });

  it('[allowed: none]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 0);
      done();
    });
  });

  it('[allowed: 1, 2]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            2
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 44);
      done();
    });
  });

  it('[allowed: 1, 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 50);
      done();
    });
  });

  it('[allowed: 2, 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            2,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 44);
      done();
    });
  });

  it('[allowed: 1, 2, 3] - as default', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            2,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 59);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('shorthand values - scss', function () {
  var file = lint.file('shorthand-values.scss');

  it('[default]', function (done) {
    lint.test(file, {
      'shorthand-values': 1
    }, function (data) {
      lint.assert.equal(78, data.warningCount);
      done();
    });
  });

  it('[allowed: 1]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(32, data.warningCount);
      done();
    });
  });

  it('[allowed: 2]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            2
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(40, data.warningCount);
      done();
    });
  });

  it('[allowed: 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(47, data.warningCount);
      done();
    });
  });

  it('[allowed: none]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(0, data.warningCount);
      done();
    });
  });

  it('[allowed: 1, 2]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            2
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(59, data.warningCount);
      done();
    });
  });

  it('[allowed: 1, 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(66, data.warningCount);
      done();
    });
  });

  it('[allowed: 2, 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            2,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(59, data.warningCount);
      done();
    });
  });

  it('[allowed: 1, 2, 3] - as default', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            2,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(78, data.warningCount);
      done();
    });
  });
});


//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('shorthand values - sass', function () {
  var file = lint.file('shorthand-values.sass');

  it('[default]', function (done) {
    lint.test(file, {
      'shorthand-values': 1
    }, function (data) {
      lint.assert.equal(78, data.warningCount);
      done();
    });
  });

  it('[allowed: 1]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(32, data.warningCount);
      done();
    });
  });

  it('[allowed: 2]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            2
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(40, data.warningCount);
      done();
    });
  });

  it('[allowed: 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(47, data.warningCount);
      done();
    });
  });

  it('[allowed: none]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(0, data.warningCount);
      done();
    });
  });

  it('[allowed: 1, 2]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            2
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(59, data.warningCount);
      done();
    });
  });

  it('[allowed: 1, 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(66, data.warningCount);
      done();
    });
  });

  it('[allowed: 2, 3]', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            2,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(59, data.warningCount);
      done();
    });
  });

  it('[allowed: 1, 2, 3] - as default', function (done) {
    lint.test(file, {
      'shorthand-values': [
        1,
        {
          'allowed-shorthands': [
            1,
            2,
            3
          ]
        }
      ]
    }, function (data) {
      lint.assert.equal(78, data.warningCount);
      done();
    });
  });
});
