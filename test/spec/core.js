var $ = require('air')
  , expect = require('chai').expect;

describe('Core:', function() {
  it('should have dom array', function(done) {
    var el = $('div');
    //console.log(el.length);
    expect(el.dom).to.be.an('array');
    done();
  });
});
