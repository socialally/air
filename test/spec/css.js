var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Css:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('css')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should return self on no elements', function(done) {
    var el = $();
    expect(el.css()).to.equal(el);
    done();
  });

  it('should return null for non-existent style property', function(done) {
    var el = $('.css');
    expect(el.css('non-existent-style')).to.eql(null);
    done();
  });

  it('should get all styles', function(done) {
    var el = $('.css')
      , styles = el.css();

    expect(styles).to.be.an('object');
    done();
  });

  it('should get computed style', function(done) {
    var el = $('.css')
      , color = el.css('color')
      , background = el.css('background-color');
    expect(color).to.be.a('string');
    expect(background).to.be.a('string');
    done();
  });

});
