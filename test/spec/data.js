var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Data:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('attr'),
      require('data')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should get null on missing data attribute', function(done) {
    expect($('.data').data('foo')).to.eql(null);
    done();
  });

  it('should set and get data attribute', function(done) {
    var el = $('.data').data('foo', 'bar');
    expect(el.get(0).getAttribute('data-foo')).to.eql('bar');
    expect(el.data('foo')).to.eql('bar');
    done();
  });

  it('should use prefixed data attribute', function(done) {
    var el = $('.data').data('data-bar', 'baz');
    expect(el.get(0).getAttribute('data-bar')).to.eql('baz');
    done();
  });

  it('should prefix object keys', function(done) {
    var el = $('.data').data({foo: 'baz'});
    expect(el.get(0).getAttribute('data-foo')).to.eql('baz');
    el.data(false);
    done();
  });

  it('should ignore invalid argument', function(done) {
    var el = $('.data').data(false);
    done();
  });

  it('should delete multiple data attributes', function(done) {
    var el = $('.data').data({foo: null, bar: null});
    expect(el.get(0).getAttribute('data-foo')).to.eql(null);
    expect(el.get(0).getAttribute('data-bar')).to.eql(null);
    done();
  });

});
