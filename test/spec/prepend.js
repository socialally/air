var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Prepend:', function() {

  beforeEach(function(done) {
    $.plugin([require('prepend')]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should have plugin method (prepend)', function(done) {
    var fx = $(util.selector);
    expect(fx.prepend).to.be.a('function');
    done();
  });

  it('should prepend element', function(done) {
    // fixture container
    var fx = $(util.selector);
    expect(fx.get(0).childNodes.length).to.eql(0);
    // prepend the mock element
    fx.prepend($('.prepend'));
    // fixture should now have a single child element
    expect(fx.get(0).childNodes.length).to.eql(1);
    done();
  });

  it('should move element on single target element', function(done) {
    // fixture container
    var fx = $(util.selector);
    expect(fx.get(0).childNodes.length).to.eql(0);
    // prepend the mock element(s)
    var ap = $('.prepend-multi');

    // only matched a single target so the target is not cloned
    // multiple calls result in it being *moved* to the same parent
    fx.prepend(ap)
      .prepend(ap)
      .prepend(ap);
    // fixture should now have single child element
    expect(fx.get(0).childNodes.length).to.eql(1);
    done();
  });

  it('should clone element on multiple target elements', function(done) {
    var fx = $('.prepend-parent')
      , ap = $('.prepend-child')
      , node = ap.get(0);
    fx.prepend(ap);
    $('.prepend-child').each(function(el, index) {
      if(!index) {
        // this element should have been cloned
        expect(el === node).to.eql(false);
      }else{
        // last match moved the content element
        expect(el === node).to.eql(true);
      }
    })
    done();
  });

});
