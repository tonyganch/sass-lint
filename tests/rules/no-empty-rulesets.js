'use strict';

var lint = require('./_lint');

//////////////////////////////
// CSS syntax tests
//////////////////////////////
describe('no empty rulesets - css', function () {
  var file = lint.file('no-empty-rulesets.css');

  it('enforce', function (done) {
    lint.test(file, {
      'no-empty-rulesets': 1
    }, function (data) {
      lint.assert.equal(data.warningCount, 3);
      done();
    });
  });
});

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no empty rulesets - scss', function () {
  var file = lint.file('no-empty-rulesets.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-empty-rulesets': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });
});
