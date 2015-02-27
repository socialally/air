var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Html:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('html')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should return self on no elements', function(done) {
    var el = $();
    expect(el.html()).to.equal(el);
    done();
  });

  it('should get inner html content', function(done) {
    var el = $('.html');
    expect(el.html().trim()).to.eql('<p>foo</p>');
    done();
  });

  it('should set inner html content', function(done) {
    var el = $('.html');
    expect(el.html('<p>bar</p>').html().trim()).to.eql('<p>bar</p>');
    done();
  });

  it('should empty inner html content', function(done) {
    var el = $('.html');
    expect(el.html('').html()).to.eql('');

    // restore for next test
    el.html('<p>foo</p>');
    done();
  });

  it('should get outer html content', function(done) {
    var el = $('.html p');
    expect(el.html(true).trim()).to.eql('<p>foo</p>');
    done();
  });

  it('should set outer html content', function(done) {
    var el = $('.html p');
    el.html('<p>bar</p>', true);
    // content is invalidated, need to re-run the selector
    el = $('.html p');
    expect(el.html(true).trim()).to.eql('<p>bar</p>');
    done();
  });
});
