'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no qualifying elements - css', function () {
  var file = lint.file('no-qualifying-elements.css');

  it('[attribute: false, class: false, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });

  it('[attribute: true, class: false, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 2);
      done();
    });
  });

  it('[attribute: false, class: true, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-class': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 2);
      done();
    });
  });

  it('[attribute: false, class: false, id: true]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-id': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 2);
      done();
    });
  });

  it('[attribute: true, class: true, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true,
          'allow-element-with-class': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 1);
      done();
    });
  });

  it('[attribute: true, class: true, id: true]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true,
          'allow-element-with-class': true,
          'allow-element-with-id': true
        }
      ]
    }, function (data) {
      lint.assert.equal(data.warningCount, 0);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no qualifying elements - scss', function () {
  var file = lint.file('no-qualifying-elements.scss');

  it('[attribute: false, class: false, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[attribute: true, class: false, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('[attribute: false, class: true, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-class': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('[attribute: false, class: false, id: true]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-id': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('[attribute: true, class: true, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true,
          'allow-element-with-class': true
        }
      ]
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });

  it('[attribute: true, class: true, id: true]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true,
          'allow-element-with-class': true,
          'allow-element-with-id': true
        }
      ]
    }, function (data) {
      lint.assert.equal(0, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no qualifying elements - sass', function () {
  var file = lint.file('no-qualifying-elements.sass');

  it('[attribute: false, class: false, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });

  it('[attribute: true, class: false, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('[attribute: false, class: true, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-class': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('[attribute: false, class: false, id: true]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-id': true
        }
      ]
    }, function (data) {
      lint.assert.equal(2, data.warningCount);
      done();
    });
  });

  it('[attribute: true, class: true, id: false]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true,
          'allow-element-with-class': true
        }
      ]
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });

  it('[attribute: true, class: true, id: true]', function (done) {
    lint.test(file, {
      'no-qualifying-elements': [
        1,
        {
          'allow-element-with-attribute': true,
          'allow-element-with-class': true,
          'allow-element-with-id': true
        }
      ]
    }, function (data) {
      lint.assert.equal(0, data.warningCount);
      done();
    });
  });
});
