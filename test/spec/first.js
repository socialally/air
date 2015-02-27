var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('First:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('first')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should reduce matched elements', function(done) {
    var el = $('.first span');
    expect(el.length).to.eql(3);
    expect(el.first()).to.equal(el);
    expect(el.length).to.eql(1);
    expect(el.get(0).innerHTML).to.eql('1');
    done();
  });

});
