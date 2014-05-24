'use strict';

var generators = require('../lib/generators.js');

var letterPattern = /[a-zA-Z]/;
var numberPattern = /[\d]/;
var specialPattern = /[\!\@\#\$\%\^\&\*\(\)\_\=\+]/;

var numberOfTests = 50000;

exports.password = {
  setUp: function(done) {
    done();
  },
  'letters': function(test) {
    for (var i = 0; i < numberOfTests; i++) {
      var actual = generators.LetterGenerator.next();
      test.strictEqual(letterPattern.test(actual), true, actual + ' should be ASCII');
    }
    test.done();
  },
  'numbers': function(test) {
    for (var i = 0; i < numberOfTests; i++) {
      var actual = generators.NumberGenerator.next();
      test.strictEqual(numberPattern.test(actual), true, actual + ' should be number');
    }
    test.done();
  },
  'special': function(test) {
    for (var i = 0; i < numberOfTests; i++) {
      var actual = generators.SpecialGenerator.next();
      test.strictEqual(specialPattern.test(actual), true, actual + ' should be special');
    }
    test.done();
  }
};
