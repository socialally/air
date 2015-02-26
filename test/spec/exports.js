var $ = require('air')
  , expect = require('chai').expect;

describe('Core:', function() {
  it('should export function(s)', function(done) {
    //window.a = 2;
    //window.variable = 'mew';
    expect($).to.be.a('function');
    expect($.plugin).to.be.a('function');
    //console.log(a);
    done();
  });
});
