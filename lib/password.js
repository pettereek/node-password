/*
 * password
 * https://github.com/pettereek/password
 *
 * Copyright (c) 2014 Petter Eek
 * Licensed under the MIT license.
 */

'use strict';

exports.Password = (function() {
  var _ = require('underscore');
  var generators = require('./generators');

  var base = {
    length: 15,
    letters: true,
    numbers: true,
    special: true
  };

  var Password = function (config) {
    this.config = _.extend({}, base, config);

    if (!_.isNumber(this.config.length)) { throw Error('Password length must be a number'); }

    this.regenerate();
  };

  Password.prototype.regenerate = function() {
    var password = '';
    for (var i = 0; i < this.config.length; i++) {
      var generator = this.nextGenerator();
      password += generator.next();
    }
    this.pw = password;
    return this.pw;
  };

  Password.prototype.nextGenerator = function() {
    var possible = [];
    if (this.config.letters === true) {
      possible.push(generators.LetterGenerator); // Letters are nicer so have two letter generators
      possible.push(generators.LetterGenerator);
    }
    if (this.config.numbers === true) { possible.push(generators.NumberGenerator); }
    if (this.config.special === true) { possible.push(generators.SpecialGenerator); }

    return possible[Math.floor(Math.random() * possible.length)];
  };

  Password.prototype.toString = function() {
    return this.pw;
  };

  Password.prototype.toSafeString = function(safeChar) {
    var safe = '';
    for (var i = 0; i < this.conf.length; i++) {
      safe += safeChar || '*';
    }
    return safe;
  };

  return Password;
})();
