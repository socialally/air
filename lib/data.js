;(function() {
  "use strict"

  var prefix = 'data-';

  /**
   *  Get a data attribute of the first matched element or
   *  set `data` attribute(s) on all matched elements.
   *
   *  Requires that the `attr` plugin has been loaded.
   */
  function data(key, val) {
    var o = {}, z;

    function inject(key) {
      if(typeof key === 'string' && key.indexOf(prefix) !== 0) {
        key = prefix + key;
      }
      return key;
    }

    if(typeof key === 'string') {
      key = inject(key);
    }else if(typeof key === 'object') {
      for(z in key) {
        o[inject(z)] = key[z];
      }
      key = o;
    }

    return this.attr(key, val);
  }

  function plugin(conf) {
    conf.proto.data = data;
  }

  // required `attr` dependency
  plugin.deps = {attr: true};

  module.exports = plugin;
})();
