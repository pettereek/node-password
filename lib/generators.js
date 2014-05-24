/*
 * password
 * https://github.com/pettereek/password
 *
 * Copyright (c) 2014 Petter Eek
 * Licensed under the MIT license.
 */

'use strict';

exports.LetterGenerator = (function () {
  function nextUpperCaseChar() {
    var charCode = Math.floor(65 + Math.random() * 25);
    return String.fromCharCode(charCode);
  }

  function useLower() {
    return Math.floor(Math.random() * 2) === 0;
  }

  return {
    next: function () {
      var next = nextUpperCaseChar();
      if (useLower()) {
        next = next.toLowerCase();
      }
      return next;
    }
  };
})();

exports.NumberGenerator = (function () {
  return {
    next: function () {
      return Math.floor(Math.random() * 9).toString();
    }
  };
})();

exports.SpecialGenerator = (function () {
  var special = ['!','@','#','$','%','^','&','*','(',')','_','=','+'];
  return {
    next: function () {
      return special[Math.floor(Math.random() * special.length)];
    }
  };
})();