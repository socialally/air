(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var air = require('air');

module.exports = {
  air: air,
}

// TODO: include all system plugins in this distribution

if(window) {
  window.$ = air;
}

},{"air":2}],2:[function(require,module,exports){
;(function() {
  'use strict'

  /**
   *  Chainable wrapper class.
   *
   *  This is the core of the entire plugin system and typically you extend
   *  functionality by adding methods to the prototype of this function.
   *
   *  However a plugin may also add static methods to the main function,
   *  see the `create` plugin for an example of adding static methods.
   *
   *  This implementation targets modern browsers (IE9+) and requires that
   *  the array methods `isArray`, `forEach` and `filter` are available,
   *  for older browsers you will need to include polyfills.
   *
   *  @param el A DOM element, array of elements or selector.
   *  @param context The context element for a selector.
   */
  function Air(el, context) {
    //window.a = 'b';
    context = context || document;
    this.dom = typeof el === 'string' ? context.querySelectorAll(el) : el;
    if(el instanceof Air) {
      this.dom = el.dom.slice(0);
    }else if(!Array.isArray(el)) {
      if(!(this.dom instanceof NodeList)) {
        this.dom = [this.dom];
      }else{
        this.dom = Array.prototype.slice.call(this.dom);
      }
    }
  }

  var proto = Air.prototype;

  /**
   *  Get the number of wrapped DOM elements.
   */
  Object.defineProperty(
    proto, 'length', {get: function getLength(){return this.dom.length}});

  /**
   *  Get the DOM element at the specified index.
   */
  proto.get = function get(index) {
    if(index === undefined) { return this.dom };
    return this.dom[index];
  }

  /**
   *  Main function, see the documentation for the `Air` class.
   */
  function air(el, context) {
    return new Air(el, context);
  }

  /**
   *  Static plugin method.
   *
   *  @param plugins Array of plugin functions.
   */
  function plugin(plugins) {
    var z;

    /**
     *  Plugin configuration options object passed to plugin methods.
     */
    var opts = {
      main: air,
      clazz: Air,
      proto: proto,
      plugin: plugin
    };

    if(Array.isArray(plugins)) {
      plugins.forEach(function(method) {
        method(opts);
      })
    // assume object style definition
    // allows passing runtime configuration to
    // a plugin where necessary
    }else{
      for(z in plugins) {
        plugins[z].plugin(opts, plugins[z].conf)
      }
    }
  }

  air.plugin = plugin;

  module.exports = air;
})();

},{}]},{},[1]);
