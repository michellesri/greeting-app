var greet = require('../greet');
var assert = require('assert');

describe('My First Tests', function() {
    it('Can successfully incorporate "Nancy" ?', function() {
        assert.equal(
          greet.greet('Nancy') , 'Hello, Nancy.'
        );
    });
    it('Are arguments being processed correctly?', function () { //I'm not dead sure what's meant by this req. My best guess follows.
        assert.equal(
          typeof greet.greet('Nancy') , 'string'
        );
    })
});
