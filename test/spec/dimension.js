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

  it('should return self on no elements', function(done) {
    var el = $();
    expect(el.width()).to.eql(el);
    expect(el.height()).to.eql(el);
    done();
  });

  it('should get element width', function(done) {
    var el = $('.dimension');
    //expect(el.width()).to.eql(100);
    expect(el.outerWidth()).to.eql(92);
    expect(el.outerWidth(true)).to.eql(112);
    done();
  });

  it('should get element height', function(done) {
    var el = $('.dimension');
    //expect(el.height()).to.eql(100);
    expect(el.outerHeight()).to.eql(92);
    expect(el.outerHeight(true)).to.eql(112);
    done();
  });

});
