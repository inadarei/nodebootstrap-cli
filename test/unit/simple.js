const assert  = require('chai').assert;
const sinon   = require('sinon');
const fh      = require("../support/fixture-helper.js");
const path = require('path');
require('app-module-path').addPath(path.join(__dirname,'../../lib'));
const log     = require('metalogger')();

describe('some test as just an example', function() {

  var fixtures = {};

  before(function(done) {

      fh.loadFixture("users-list.json").then((sampleData) => {
        fixtures.users = JSON.parse(sampleData);
        done();
      }).catch(function(err) {
        throw new Error(err);
      });

  });

  it('Fun test of mocha with fixtures', function(done) {
    assert.equal(fixtures.users[0].email,"first@example.com");
    done();
  });

  it('Fun test of easy module loading from lib', function() {
    let some = require('logic');
    assert.equal(true, true); // if we reached this, module was loaded.
  });

});