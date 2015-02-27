var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Empty:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('empty')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should empty element content', function(done) {
    var el = $('.empty span');
    el.each(function(node) {
      expect(node.childNodes.length).to.be.gt(0);
    })

    el.empty();

    el.each(function(node) {
      expect(node.childNodes.length).to.eql(0);
    })
    done();
  });

});
