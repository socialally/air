var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Class:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('class')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should not have class name', function(done) {
    expect($('.class').hasClass('bar')).to.eql(false);
    done();
  });

  it('should not have class name (missing attribute)', function(done) {
    expect($('body').hasClass('bar')).to.eql(false);
    done();
  });

  it('should have class name', function(done) {
    expect($('.class').hasClass('foo')).to.eql(true);
    done();
  });

  it('should return self on no arguments (addClass())', function(done) {
    var el = $('.class');
    expect(el.addClass()).to.equal(el);
    done();
  });

  it('should ignore existing class name', function(done) {
    expect(
      $('.class').addClass('foo').get(0).getAttribute('class'))
        .to.eql('class foo');
    done();
  });

  it('should add class names', function(done) {
    expect(
      $('.class').addClass('bar baz').get(0).getAttribute('class'))
        .to.eql('class foo bar baz');
    done();
  });

  it('should add class names with no class attribute', function(done) {
    expect(
      $('#blank').addClass('bar baz').get(0).getAttribute('class'))
        .to.eql('bar baz');
    // clean up mock element
    $('#blank').removeClass();
    done();
  });


  it('should remove class names', function(done) {
    expect($('.class').removeClass('bar baz').get(0).getAttribute('class'))
      .to.eql('class foo');
    done();
  });

  it('should return early on missing class attribute', function(done) {
    expect(
      $('body').removeClass('foo').get(0).getAttribute('class'))
        .to.eql(null);
    done();
  });

  it('should return self on no arguments (removeClass())', function(done) {
    var el = $('.class');
    expect(el.removeClass()).to.equal(el);
    done();
  });

});
