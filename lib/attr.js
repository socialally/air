;(function() {
  "use strict"

  function attr(key, val) {
    if(!this.length) return this;

    if(key === undefined && val === undefined) {
      // no args, get all attributes for first element
      return this.dom[0].attributes;
    }else if(typeof key === 'string' && !val) {
      // set or delete attribute on first matched element
      if(val === null) return this.dom[0].removeAttribute(key);
      return this.dom[0].getAttribute(key);
    }else {
      this.dom.forEach(function(el) {
        if(typeof key === 'object') {
          for(var z in key) {
            el.setAttribute(z, key[z]);
          }
        }else{
          if(val === null) return el.removeAttribute(key);
          el.setAttribute(key, val);
        }
      });
    }
    return this;
  }

  function plugin(conf) {
    conf.proto.attr = attr;
  }

  module.exports = plugin;
})();
