var $ = require('air')
  , expect = require('chai').expect;

describe('Core:', function() {
  it('should have dom array', function(done) {
    var el = $('#mocha');
    expect(el.length).to.eql(1);
    expect(el.dom).to.be.an('array');
    done();
  });
});
