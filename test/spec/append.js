var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Append:', function() {

  beforeEach(function(done) {
    $.plugin([require('append')]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should have plugin method (append)', function(done) {
    var fx = $(util.selector);
    expect(fx.append).to.be.a('function');
    done();
  });

  it('should append element', function(done) {
    // fixture container
    var fx = $(util.selector);
    expect(fx.get(0).childNodes.length).to.eql(0);
    // append the mock element
    fx.append($('.append'));
    // fixture should now have a single child element
    expect(fx.get(0).childNodes.length).to.eql(1);
    done();
  });

  it('should move element on single target element', function(done) {
    // fixture container
    var fx = $(util.selector);
    expect(fx.get(0).childNodes.length).to.eql(0);
    // append the mock element(s)
    var ap = $('.append-multi');

    // only matched a single target so the target is not cloned
    // multiple calls result in it being *moved* to the same parent
    fx.append(ap)
      .append(ap)
      .append(ap);
    console.log(fx.get(0).innerHTML)
    // fixture should now have single child element
    expect(fx.get(0).childNodes.length).to.eql(1);
    done();
  });

  it('should clone element on multiple target elements', function(done) {
    var fx = $('.append-parent')
      , ap = $('.append-child')
      , node = ap.get(0);
    fx.append(ap);
    $('.append-child').each(function(el, index) {
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
