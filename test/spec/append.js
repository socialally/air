var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

$.plugin([require('append')]);

describe('Append:', function() {

  beforeEach(function(done) {
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

  it('should append multiple elements', function(done) {
    // fixture container
    var fx = $(util.selector);
    expect(fx.get(0).childNodes.length).to.eql(0);
    // append the mock element(s)
    var ap = $('.append');
    fx.append(ap)
      .append(ap)
      .append(ap);
    // fixture should now have multiple child elements appended
    expect(fx.get(0).childNodes.length).to.eql(3);
    done();
  });

});
