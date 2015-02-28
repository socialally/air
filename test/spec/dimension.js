var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Dimension:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('dimension')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should return null on no elements', function(done) {
    var el = $();
    expect(el.width()).to.eql(null);
    expect(el.height()).to.eql(null);

    expect(el.innerWidth()).to.eql(null);
    expect(el.innerHeight()).to.eql(null);
    done();
  });

  it('should get element outer width', function(done) {
    var el = $('.dimension');
    expect(el.outerWidth()).to.eql(92);
    done();
  });

  it('should get element outer width w/margin', function(done) {
    var el = $('.dimension');
    expect(el.outerWidth(true)).to.eql(112);
    done();
  });

  it('should get element outer height', function(done) {
    var el = $('.dimension');
    expect(el.outerHeight()).to.eql(92);
    done();
  });

  it('should get element outer height w/margin', function(done) {
    var el = $('.dimension');
    expect(el.outerHeight(true)).to.eql(112);
    done();
  });

});
