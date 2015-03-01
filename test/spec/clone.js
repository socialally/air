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
    var el = $('.clone');
    done();
  });

});
