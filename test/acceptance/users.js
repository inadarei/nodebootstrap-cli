const assert  = require('chai').assert;
const sinon = require('sinon');
const fh     = require("../support/fixture-helper.js");
const log     = require('metalogger')();

describe('some test just example', function() {

  it('Fun test of mocha', function(done) {
    assert.equal(true, true);
    done();
  });

});
