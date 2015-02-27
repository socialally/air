var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Find:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('find')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should find descendants', function(done) {
    var el = $('.find').find('span');
    expect(el.length).to.eql(4);
    el.each(function(node) {
      expect(node.tagName.toLowerCase()).to.eql('span');
    });
    done();
  });

});
