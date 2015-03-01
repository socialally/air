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

  it('should get computed style', function(done) {
    var el = $('.css');
    done();
  });

});
