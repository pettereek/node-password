'use strict';

var Password = require('../lib/password.js').Password;

exports.password = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {
    var pw = new Password();
    test.equal(pw.toString().length, 15, pw + ' should be 15 chars long');
    test.done();
  },
  'specify size': function(test) {
    var pw = new Password({ length: 100 });
    test.equal(pw.toString().length, 100, pw + ' should be 100 chars long');
    test.done();
  },
  'only letters': function(test) {
    var pw = new Password({ numbers: false, special: false });
    test.strictEqual(/[^a-zA-Z]/.test(pw.toString()), false, pw + ' should only contain letter');
    test.done();
  },
  'only numbers': function(test) {
    var pw = new Password({ letters: false, special: false });
    test.strictEqual(/[^\d]/.test(pw.toString()), false, pw + ' should only contain number');
    test.done();
  },
  'only special': function(test) {
    var pw = new Password({ letters: false, numbers: false });
    test.strictEqual(/[\da-zA-Z]/.test(pw.toString()), false, pw + ' should only contain speical');
    test.done();
  },
  'regenerates': function(test) {
    var pw = new Password();
    var first = pw.toString();

    pw.regenerate();
    var second = pw.toString();
    test.notEqual(first, second, first + ' and ' + second + ' should not be equal');
    test.done();
  }
};
