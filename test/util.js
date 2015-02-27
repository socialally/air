var id = 'fixture'
  , $ = require('air')
  , selector = '#' + id;

/**
 *  Clean class prototype so that loaded plugins do not carry
 *  across test specs.
 */
function clean(done) {
  var z
    , core = ['get', 'each', 'air', 'plugin']
    , proto = $.Air.prototype;
  for(z in proto) {
    //console.log(z);
    if(!~core.indexOf(z)) {
      delete proto[z];
    }
  }
  if(typeof done === 'function') {
    done();
  }
}

/**
 *  Before each handler.
 */
function before(markup) {
  var el = document.querySelector(selector);
  el.innerHTML = markup || '';
}

/**
 *  After each handler.
 */
function after(done) {
  var el = document.querySelector(selector);
  el.innerHTML = '';
  clean(done);
}

module.exports = {
  id: id,
  selector: selector,
  before: before,
  after: after,
  clean: clean,
}
