var $ = require('air')
  , expect = require('chai').expect;

describe('Plugin:', function() {

  it('should load instance method plugin', function(done) {
    $.plugin([require('instance-plugin')]);
    var el = $('div');
    expect(el.method).to.be.a('function');
    expect(el.method()).to.equal(el);
    done();
  });

  it('should load static method plugin', function(done) {
    $.plugin([require('static-plugin')]);
    expect($.method).to.be.a('function');
    done();
  });

  it('should load plugin w/ runtime configuration', function(done) {
    var conf = {foo: 'bar'}
      , plugins = {
          runtime: {plugin: require('runtime-plugin'), conf: conf}
        };
    $.plugin(plugins);
    var el = $('div');
    expect(el.method).to.be.a('function');
    expect(el.method()).to.equal(conf);
    done();
  });

});
