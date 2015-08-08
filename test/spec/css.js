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
    expect(Boolean(el.css('non-existent-style'))).to.eql(false);
    done();
  });

  it('should get all styles', function(done) {
    var el = $('.css')
      , styles = el.css();
    // NOTE: array style object, chai update, breaks assertion
    //expect(styles).to.be.an('object');

    expect(styles.color).to.be.a('string');
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

  it('should set style property', function(done) {
    var el = $('.css');
    expect(el.css('position', 'relative')).to.eql(el);
    expect(el.css('position')).to.eql('relative');
    done();
  });

  it('should set style property', function(done) {
    var el = $('.css')
      , props = {position: 'absolute', left: '5px', top: '5px'};
    expect(el.css(props)).to.eql(el);
    expect(el.css('position')).to.eql('absolute');
    expect(el.css('left')).to.eql('5px');
    expect(el.css('top')).to.eql('5px');
    done();
  });

});
