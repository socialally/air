var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Last:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('last')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should reduce matched elements', function(done) {
    var el = $('.last span');
    expect(el.length).to.eql(3);
    expect(el.last()).to.equal(el);
    expect(el.length).to.eql(1);
    expect(el.get(0).innerHTML).to.eql('3');
    done();
  });

});
