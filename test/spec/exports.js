var $ = require('air')
  , expect = require('chai').expect;

describe('Core:', function() {

  it('should export function(s)', function(done) {
    expect($).to.be.a('function');
    expect($.plugin).to.be.a('function');
    done();
  });

  it('should return air instance from constructor call', function(done) {
    // trigger code path
    expect($.Type()).to.be.instanceof($.Type);
    done();
  });

});
