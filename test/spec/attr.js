var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Attr:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('attr')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should return self on no elements', function(done) {
    var el = $();
    expect(el.attr('title')).to.equal(el);
    done();
  });

  it('should get attribute object', function(done) {
    var attrs = $('.attr').attr();
    expect(attrs).to.be.an('object');
    expect(attrs.title).to.eql('foo');
    done();
  });

  it('should get attribute', function(done) {
    expect($('.attr').attr('title')).to.equal('foo');
    done();
  });

  it('should set attribute', function(done) {
    expect($('.attr').attr('title', 'bar').attr('title')).to.equal('bar');
    done();
  });

  it('should set attribute (multiple elements)', function(done) {
    var el = $('.attr span').attr('title', 'foo');
    el.each(function(node) {
      expect(node.getAttribute('title')).to.eql('foo');
    });
    done();
  });

  it('should delete attribute (multiple elements)', function(done) {
    var el = $('.attr span').attr('title', null);
    el.each(function(node) {
      expect(node.getAttribute('title')).to.eql(null);
    });
    done();
  });

  it('should set attribute w/object', function(done) {
    expect($('.attr').attr({title: 'foo'}).attr('title')).to.equal('foo');
    done();
  });

  it('should set multiple attributes (multiple elements)', function(done) {
    var el = $('.attr span').attr({title: 'foo', class: 'mock-attr'});
    el.each(function(node) {
      expect(node.getAttribute('title')).to.eql('foo');
      expect(node.getAttribute('class')).to.eql('mock-attr');
    });
    done();
  });

  it('should delete multiple attributes (multiple elements)', function(done) {
    var el = $('.attr span').attr({title: null, class: null});
    el.each(function(node) {
      expect(node.getAttribute('title')).to.eql(null);
      expect(node.getAttribute('class')).to.eql(null);
    });
    done();
  });

});
