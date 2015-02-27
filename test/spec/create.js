var $ = require('air')
  , expect = require('chai').expect;

$.plugin([require('create')]);

describe('Create:', function() {

  it('should declare plugin static functions', function(done) {
    expect($.create).to.be.a('function');
    expect($.el).to.be.a('function');
    done();
  });

  it('should create DOM element', function(done) {
    var tag = 'div'
      , div = $.create(tag);
    expect(div.tagName.toLowerCase()).to.eql(tag)
    done();
  });

  it('should create wrapped element', function(done) {
    var tag = 'div'
      , div = $.el(tag);
    expect(div).to.be.instanceof($.Air);
    expect(div.get(0).tagName.toLowerCase()).to.eql(tag)
    done();
  });

});
