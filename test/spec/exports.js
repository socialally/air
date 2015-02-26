var $ = require('air')
  , expect = require('chai').expect;

describe('Core:', function() {
  it('should export function(s)', function() {
    expect($).to.be.a('function');
    expect($.plugin).to.be.a('function');
  });
});
