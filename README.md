# node-password

Generate strong passwords

## Installation

```bash
$ npm install node-password
```

## Usage

```js
var Password = require('node-password');
var pw = new Password();
// pw.toString() => 'aJi*2&4nLk_0l!k'
```

### Options

You can pass a configuration option to the ```Password()``` contstuctor.

```js
var Password = require('node-password');
var options = {
  length: 5,
  letters: true,
  numbers: false,
  special: false
};
var pw = new Password(options);
```

### regererate()

Generates a new password.

```js
var Password = require('node-password');
var pw = new Password();
// pw.toString() => 'aJi*2&4nLk_0l!k'
pw.regenerate();
// pw.toString() => 'laOjNWjA7^24$@1'
```

### toSafeString(s)

Return an obfuscated string of ```s``` or ```*```.

```js
var Password = require('node-password');
var pw = new Password();
// pw.toSafeString() => '***************'
```