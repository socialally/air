var $ = require('air')
  , expect = require('chai').expect;

$.plugin([
  require('attr'),
  require('create')
]);

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

  it('should create wrapped element w/ attributes', function(done) {
    var tag = 'div'
      , attrs = {foo: 'bar', bar: 'baz'}
      , div = $.el(tag, attrs)
      , el = div.get(0);

    expect(div).to.be.instanceof($.Air);
    expect(el.tagName.toLowerCase()).to.eql(tag);
    expect(el.getAttribute('foo')).to.eql(attrs.foo);
    expect(el.getAttribute('bar')).to.eql(attrs.bar);
    done();
  });

});
