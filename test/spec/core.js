var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Core:', function() {

  it('should use zero arguments', function(done) {
    var el = $();
    console.log('' + el.dom);
    console.log('' + el.length);
    expect(el.length).to.eql(0);
    expect(el.dom).to.be.an('array');
    done();
  });

  it('should use selector string', function(done) {
    var el = $(util.selector);
    expect(el.length).to.eql(1);
    expect(el.dom).to.be.an('array');
    expect(el.get(0)).to.be.instanceof(Element);
    done();
  });

  it('should use selector w/ string context (context selector)',
    function(done) {
      var el = $(util.selector, 'body');
      expect(el.length).to.eql(1);
      expect(el.dom).to.be.an('array');
      expect(el.get(0)).to.be.instanceof(Element);
      done();
    }
  );

  it('should use existing wrapped elements', function(done) {
    var el = $(util.selector)
      , wl = $(el);
    expect(wl.length).to.eql(1);
    expect(wl.dom).to.be.an('array');
    expect(wl.get(0)).to.be.instanceof(Element);
    done();
  });

  it('should use node list', function(done) {
    var el = $(document.querySelectorAll(util.selector));
    expect(el.length).to.eql(1);
    expect(el.dom).to.be.an('array');
    expect(el.get(0)).to.be.instanceof(Element);
    done();
  });

  it('should use element', function(done) {
    var el = $(document.getElementById(util.id));
    expect(el.length).to.eql(1);
    expect(el.dom).to.be.an('array');
    expect(el.get(0)).to.be.instanceof(Element);
    done();
  });

  it('should use element array', function(done) {
    var el = $([document.querySelector(util.selector)]);
    expect(el.length).to.eql(1);
    expect(el.dom).to.be.an('array');
    expect(el.get(0)).to.be.instanceof(Element);
    done();
  });

});
