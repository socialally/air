var $ = require('air')
  , expect = require('chai').expect
  , util = require('../util');

describe('Children:', function() {

  beforeEach(function(done) {
    $.plugin([
      require('children')
    ]);
    util.before();
    done();
  })
  afterEach(util.after);

  it('should get all direct descendants', function(done) {
    var el = $('.children').children();
    expect(el.length).to.eql(3);
    done();
  });

  it('should filter direct descendants by selector', function(done) {
    var el = $('.children').children('p');
    expect(el.length).to.eql(1);
    done();
  });

});
