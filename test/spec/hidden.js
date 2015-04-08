var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Attr:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('attr'),
      require('hidden')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should set hidden attribute (no arguments)', function(done) {
    var el = $('.hidden');
    expect(el.hidden()).to.equal(el);

    var attrs = el.attr();
    expect(attrs).to.be.an('object');
    expect(attrs.hidden).to.eql('1');
    done();
  });

  it('should remove hidden attribute (show)', function(done) {
    var el = $('.hidden');
    expect(el.show()).to.equal(el);
    var attrs = el.attr();
    expect(attrs).to.be.an('object');
    expect(attrs.hidden).to.eql(undefined);
    done();
  });

  it('should set hidden attribute (hide)', function(done) {
    var el = $('.hidden');
    expect(el.hide()).to.equal(el);

    var attrs = el.attr();
    expect(attrs).to.be.an('object');
    expect(attrs.hidden).to.eql('1');
    done();
  });
});
