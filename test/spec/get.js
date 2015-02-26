var $ = require('air')
  , expect = require('chai').expect;

describe('Get:', function() {

  it('should get all dom elements as array', function(done) {
    var el = $('div')
      , arr = el.get();
    expect(arr).to.be.an('array');
    expect(arr.length).to.be.gt(0);
    done();
  });

  it('should get element at index', function(done) {
    var el = $('div')
      , div = el.get(0);
    expect(div).to.be.instanceof(Element);
    done();
  });

  it('should get undefined on out of bounds index', function(done) {
    var el = $('div')
      , div = el.get(-1);
    expect(div).to.eql(undefined);
    done();
  });

});
