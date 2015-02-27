var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Text:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('text')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should return self on no elements', function(done) {
    var el = $();
    expect(el.text()).to.equal(el);
    done();
  });

  it('should get text content', function(done) {
    var el = $('.text span');
    expect(el.text()).to.eql('foo');
    done();
  });

  it('should set text content', function(done) {
    var el = $('.text span');
    expect(el.text('bar').text()).to.eql('bar');
    done();
  });

  it('should empty text content', function(done) {
    var el = $('.text span');
    expect(el.text(false).text()).to.eql('');
    done();
  });
});
