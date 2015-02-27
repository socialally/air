var $ = require('air')
  , expect = require('chai').expect;

$.plugin([require('create')]);

describe('Create:', function() {

  it('should declare plugin static functions', function(done) {
    expect($.create).to.be.a('function');
    expect($.el).to.be.a('function');
    done();
  });

});
