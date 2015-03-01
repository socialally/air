var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Clone:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('clone')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should deep clone elements', function(done) {
    var el = $('.clone')
      , cloned = el.clone()
      , span = cloned.dom[0].firstChild
      , strong = span.firstChild;
    expect(el === cloned).to.eql(false);
    expect(cloned.length).to.eql(el.length);
    expect(span.tagName.toLowerCase()).to.eql('span');
    expect(span.getAttribute('title')).to.eql('foo');
    expect(strong.tagName.toLowerCase()).to.eql('strong');
    done();
  });

});
