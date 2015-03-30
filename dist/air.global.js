(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var air = require('air');

module.exports = {
  air: air,
}

air.plugin([
  require('append'),
  require('attr'),
  require('children'),
  require('class'),
  require('clone'),
  require('create'),
  require('css'),
  require('data'),
  require('dimension'),
  require('empty'),
  require('event'),
  require('find'),
  require('first'),
  require('html'),
  require('last'),
  require('remove'),
  require('text'),
])

if(window) {
  window.$ = air;
}

},{"air":2,"append":3,"attr":4,"children":5,"class":6,"clone":7,"create":8,"css":9,"data":10,"dimension":11,"empty":12,"event":13,"find":14,"first":15,"html":16,"last":17,"remove":18,"text":19}],2:[function(require,module,exports){
;(function() {
  'use strict'

  var zephyr = require('zephyr');

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
   *  @param el A selector, DOM element, array of elements or Air instance.
   *  @param context The context element for a selector.
   */
  function Air(el, context) {
    if(!(this instanceof Air)) {
      return new Air(el, context);
    }
    if(typeof context === 'string') {
      context = document.querySelector(context);
    }
    context = context || document;
    this.dom = typeof el === 'string' ? context.querySelectorAll(el) : el;
    if(el instanceof Air) {
      this.dom = el.dom.slice(0);
    }else if(!Array.isArray(el)) {
      if(this.dom instanceof NodeList) {
        this.dom = Array.prototype.slice.call(this.dom);
      }else{
        this.dom = (el instanceof Element || el === window) ? [el] : [];
      }
    }

    // undocumented shortcut to Array.prototype.slice
    this.slice = Array.prototype.slice;
  }

  var proto = Air.prototype = new zephyr.Type();

  /**
   *  Get the number of wrapped DOM elements.
   */
  Object.defineProperty(
    proto, 'length', {get: function(){return this.dom.length}});

  /**
   *  Get the DOM element at the specified index.
   */
  proto.get = function get(index) {
    if(index === undefined) { return this.dom };
    return this.dom[index];
  }

  /**
   *  Iterate the encapsulated DOM elements.
   */
  proto.each = function each(cb) {
    this.dom.forEach(cb);
    return this;
  }

  // construct Air instances from main function
  zephyr.Type = Air;

  // expose class reference
  zephyr.Air = Air;

  // alias main function
  proto.air = zephyr;

  module.exports = zephyr;
})();

},{"zephyr":20}],3:[function(require,module,exports){
/**
 *  Insert content, specified by the parameter, to the end of each
 *  element in the set of matched elements.
 */
function append() {
  var i, l = this.length, el, args = this.slice.call(arguments);
  function it(node, index) {
    // content elements to insert
    el.each(function(ins) {
      ins = (index < (l - 1)) ? ins.cloneNode(true) : ins;
      node.appendChild(ins);
    });
  }
  for(i = 0;i < args.length;i++) {
    // wrap content
    el = this.air(args[i]);
    // matched parent elements (targets)
    this.each(it);
  }
  return this;
}

module.exports = function() {
  this.append = append;
}

},{}],4:[function(require,module,exports){
/**
 *  Get the value of an attribute for the first element in the set of
 *  matched elements or set one or more attributes for every matched element.
 */
function attr(key, val) {
  var i, attrs, map = {};
  if(!this.length || key !== undefined && !Boolean(key)) {
    return this;
  }

  if(key === undefined && val === undefined) {
    // no args, get all attributes for first element as object
    attrs = this.dom[0].attributes;
    // convert NamedNodeMap to plain object
    for(i = 0;i < attrs.length;i++) {
      // NOTE: nodeValue is deprecated, check support for `value` in IE9!
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }else if(typeof key === 'string' && !val) {
    // delete attribute on all matched elements
    if(val === null) {
      this.each(function(el) {
        el.removeAttribute(key);
      })
      return this;
    }
    // get attribute for first matched elements
    return this.dom[0].getAttribute(key);
  // handle object map of attributes
  }else {
    this.each(function(el) {
      if(typeof key === 'object') {
        for(var z in key) {
          if(key[z] === null) {
            el.removeAttribute(z);
            continue;
          }
          el.setAttribute(z, key[z]);
        }
      }else{
        el.setAttribute(key, val);
      }
    });
  }
  return this;
}

module.exports = function() {
  this.attr = attr;
}

},{}],5:[function(require,module,exports){
/**
 *  Get the children of each element in the set of matched elements,
 *  optionally filtering by selector.
 */
function children(selector) {
  var arr = [], slice = this.slice, nodes, matches;
  this.each(function(el) {
    nodes = slice.call(el.childNodes);
    // only include elements
    nodes = nodes.filter(function(n) {
      if(n instanceof Element) { return n;}
    })
    // filter direct descendants by selector
    if(selector) {
      matches = slice.call(el.querySelectorAll(selector));
      for(var i = 0;i < nodes.length;i++) {
        if(~matches.indexOf(nodes[i])) {
          arr.push(nodes[i]);
        }
      }
    // get all direct descendants
    }else{
      arr = arr.concat(nodes);
    }
  });
  return this.air(arr);
}

module.exports = function() {
  this.children = children;
}

},{}],6:[function(require,module,exports){
/**
 *  IE9 does not support `Element.classList`, when support for IE9 is
 *  dropped this can be refactored.
 */
var attr = 'class';

/**
 *  Adds the specified class(es) to each of the set of matched elements.
 */
function addClass(className) {
  if(!className) {
    return this;
  }
  var classes = className.split(/\s+/);
  this.each(function(el) {
    var val = el.getAttribute(attr);
    var names = val ? val.split(/\s+/) : [];
    classes.forEach(function(nm) {
      if(!~names.indexOf(nm)) {
        names.push(nm);
      }
    })
    el.setAttribute(attr, names.join(' '));
  })
  return this;
}

/**
 *  Determine whether any of the matched elements are assigned the
 *  given class.
 */
function hasClass(className) {
  var i, val;
  for(i = 0;i < this.length;i++) {
    val = this.get(i).getAttribute(attr);
    val = val ? val.split(/\s+/) : [];
    if(~val.indexOf(className)) {
      return true;
    }
  }
  return false;
}

/**
 *  Remove a single class, multiple classes, or all classes from
 *  each element in the set of matched elements.
 */
function removeClass(className) {
  if(!className) {
    // remove all classes from all matched elements
    this.each(function(el) {
      el.removeAttribute(attr);
    });
    return this;
  }
  var classes = className.split(/\s+/);
  this.each(function(el) {
    var val = el.getAttribute(attr);
    // no class attribute - nothing to remove
    if(!val) { return }
    var names = val.split(/\s+/);
    names = names.filter(function(nm) {
      return ~classes.indexOf(nm) ? false : nm;
    })
    el.setAttribute(attr, names.join(' '));
  })
  return this;
}

// TODO: add toggleClass()

module.exports = function() {
  this.addClass = addClass;
  this.hasClass = hasClass;
  this.removeClass = removeClass;
}

},{}],7:[function(require,module,exports){
/**
 *  Create a deep copy of the set of matched elements.
 */
function clone() {
  var arr = [];
  this.each(function(el) {
    arr.push(el.cloneNode(true));
  });
  return this.air(arr);
}

module.exports = function() {
  this.clone = clone;
}

},{}],8:[function(require,module,exports){
/**
 *  Create a DOM element.
 *
 *  @param tag The element tag name.
 */
function create(tag) {
  return document.createElement(tag);
}

/**
 *  Create a wrapped DOM element.
 *
 *  @param tag The element tag name.
 *  @param attrs Object map of element attributes.
 */
function el(tag, attrs) {
  var n = el.air(create(tag));
  if(attrs && n.attr) {
    return n.attr(attrs);
  }
  return n;
}

module.exports = function() {
  // static method needs access to main function
  // to wrap the created element
  el.air = this.main;

  this.main.create = create;
  this.main.el = el;
}

// optional `attr` dependency
//plugin.deps = {attr: false};

},{}],9:[function(require,module,exports){
/**
 *  Get the value of a computed style property for the first element
 *  in the set of matched elements or set one or more CSS properties
 *  for every matched element.
 */
function css(key, val) {
  var style, props;
  if(!this.length) {
    return this;
  }

  if(key && typeof key === 'object') {
    props = key;
  }else if(key && val) {
    props = {};
    props[key] = val;
  }

  // get style object
  if(key === undefined) {
    style = window.getComputedStyle(this.dom[0], null);
    // TODO: convert to plain object map?
    // for the moment return CSSStyleDeclaration
    return style;
  // get single style property value
  }else if(typeof key === 'string' && !val) {
    style = window.getComputedStyle(this.dom[0], null);
    return style.getPropertyValue(key);
  }

  // set inline styles
  this.each(function(el) {
    el.style = el.style || {};
    for(var z in props) {
      el.style[z] = '' + props[z];
    }
  });
  return this;
}

module.exports = function() {
  this.css = css;
}

},{}],10:[function(require,module,exports){
var prefix = 'data-';

/**
 *  Get a data attribute of the first matched element or
 *  set `data` attribute(s) on all matched elements.
 *
 *  Requires that the `attr` plugin has been loaded.
 */
function data(key, val) {
  var o = {}, z;

  function inject(name) {
    if(typeof name === 'string' && name.indexOf(prefix) !== 0) {
      name = prefix + name;
    }
    return name;
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

module.exports = function() {
  this.data = data;
}

// required `attr` dependency
//plugin.deps = {attr: true};

},{}],11:[function(require,module,exports){
/**
 *  Get the current computed inner width (including padding but not border)
 *  for the first element in the set of matched elements.
 */
function innerWidth() {
  var style;
  if(!this.length) {
    return null;
  }
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('width'));
}

/**
 *  Get the current computed inner height (including padding but not border)
 *  for the first element in the set of matched elements.
 */
function innerHeight() {
  var style;
  if(!this.length) {
    return null;
  }
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('height'));
}

/**
 *  Get the current computed width for the first element in the set of
 *  matched elements, including padding, border, and optionally margin.
 *
 *  Returns a number (without "px") representation of the value or null
 *  if called on an empty set of elements.
 */
function outerWidth(margin) {
  var s, style;
  if(!this.length) {
    return null;
  }
  s = this.dom[0].getClientRects()[0].width;
  if(!margin) {
    style = window.getComputedStyle(this.dom[0], null);
    s -= parseInt(style.getPropertyValue('margin-top'));
    s -= parseInt(style.getPropertyValue('margin-bottom'));
  }
  return s;
}

/**
 *  Get the current computed height for the first element in the set of
 *  matched elements, including padding, border, and optionally margin.
 *
 *  Returns a number (without "px") representation of the value or null
 *  if called on an empty set of elements.
 */
function outerHeight(margin) {
  var s, style;
  if(!this.length) {
    return null;
  }
  s = this.dom[0].getClientRects()[0].height;
  if(!margin) {
    style = window.getComputedStyle(this.dom[0], null);
    s -= parseInt(style.getPropertyValue('margin-top'));
    s -= parseInt(style.getPropertyValue('margin-bottom'));
  }
  return s;
}

/**
 *
 */
function width() {
  var style;
  if(!this.length) {
    return null;
  }
  //console.log(this.dom[0]);
  if(this.dom[0] instanceof Window) {
    return this.dom[0].innerWidth;
  }
  //console.log(this.dom[0].getClientRects())
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('width'));
}

/**
 *
 */
function height() {
  var style;
  if(!this.length) {
    return null;
  }
  if(this.dom[0] instanceof Window) {
    return this.dom[0].innerHeight;
  }
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('height'));
}

module.exports = function() {
  this.width = width;
  this.height = height;

  this.outerWidth = outerWidth;
  this.outerHeight = outerHeight;

  this.innerWidth = innerWidth;
  this.innerHeight = innerHeight;
}

},{}],12:[function(require,module,exports){
/**
 *  Remove the inner HTML from all matched elements.
 */
function empty() {
  this.each(function(el) {
    el.innerHTML = '';
  });
  return this;
}

module.exports = function() {
  this.empty = empty;
}

},{}],13:[function(require,module,exports){
function on(nm, cb, capture) {
  this.each(function(el) {
    el.addEventListener(nm, cb, capture);
  });
  return this;
}

function off(nm, cb, capture) {
  this.each(function(el) {
    el.removeEventListener(nm, cb, capture);
  });
  return this;
}

module.exports = function() {
  this.on = on;
  this.off = off;
}

},{}],14:[function(require,module,exports){
/**
 *  Get the descendants of each element in the current set
 *  of matched elements, filtered by a selector.
 */
function find(selector) {
  var arr = [], $ = this.air, slice = this.slice;
  this.each(function(el) {
    arr = arr.concat(slice.call($(selector, el).dom));
  });
  return $(arr);
}

module.exports = function() {
  this.find = find;
}

},{}],15:[function(require,module,exports){
/**
 *  Reduce the set of matched elements to the first in the set.
 */
function first() {
  this.dom = this.dom.slice(0, 1);
  return this;
}

module.exports = function() {
  this.first = first;
}

},{}],16:[function(require,module,exports){
/**
 *  Get the HTML of the first matched element or set the HTML
 *  content of all matched elements.
 *
 *  Note that when using `outer` to set `outerHTML` you will likely invalidate
 *  the current encapsulated elements and need to re-run the selector to
 *  update the matched elements.
 */
function html(markup, outer) {
  if(!this.length) {
    return this;
  }
  if(typeof markup === 'boolean') {
    outer = markup;
    markup = undefined;
  }
  var prop = outer ? 'outerHTML' : 'innerHTML';
  if(markup === undefined) {
    return this.dom[0][prop];
  }
  markup = markup || '';
  this.each(function(el) {
    el[prop] = markup;
  });
  // TODO: should we remove matched elements when setting outerHTML?
  // TODO: the matched elements have been rewritten and do not exist
  // TODO: in the DOM anymore: ie: this.dom = [];
  return this;
}

module.exports = function() {
  this.html = html;
}

},{}],17:[function(require,module,exports){
/**
 *  Reduce the set of matched elements to the final one in the set.
 */
function last() {
  this.dom = this.dom.slice(this.length - 1);
  return this;
}

module.exports = function() {
  this.last = last;
}

},{}],18:[function(require,module,exports){
/**
 *  Remove all matched elements.
 */
function remove() {
  var i, el;
  for(i = 0;i < this.length;i++) {
    el = this.dom[i];
    // if for some reason this point to the document element
    // an exception will occur, pretty hard to reproduce so
    // going to let it slide
    el.parentNode.removeChild(el);
    this.dom.splice(i, 1);
    i--;
  }
  return this;
}

module.exports = function() {
  this.remove = remove;
}

},{}],19:[function(require,module,exports){
/**
 *  IE9 supports textContent and innerText has various issues.
 *
 *  See: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 *  See: http://www.kellegous.com/j/2013/02/27/innertext-vs-textcontent/
 */
function text(txt) {
  if(!this.length) {
    return this;
  }
  if(txt === undefined) {
    return this.dom[0].textContent;
  }
  txt = txt || '';
  this.each(function(el) {
    el.textContent = txt;
  });
  return this;
}

module.exports = function() {
  this.text = text;
}

},{}],20:[function(require,module,exports){
;(function() {
  'use strict'

  var hooks = [];

  /**
   *  Abstract plugin class.
   */
  function Zephyr() {
    // invoke constructor hooks
    for(var i = 0;i < hooks.length;i++) {
      hooks[i].apply(this, arguments);
    }
  }

  var proto = Zephyr.prototype;

  /**
   *  Register a method to be invoked when the class
   *  is instantiated.
   *
   *  @param hook A function to be invoked on construction.
   */
  function register(hook) {
    if(typeof hook === 'function') {
      hooks.push(hook);
    }
  }

  /**
   *  Plugin method.
   *
   *  @param plugins Array of plugin functions.
   */
  function plugin(plugins) {
    var z;
    for(z in plugins) {
      if(typeof plugins[z] === 'function') {
        plugins[z].call(proto);
      // assume object style declaration
      }else{
        plugins[z].plugin.call(proto, plugins[z].conf);
      }
    }
  }

  /**
   *  Create an instance of the class represented by *main* and proxy
   *  all arguments to the constructor.
   */
  function construct() {
    var args = [null].concat(Array.prototype.slice.call(arguments));
    return new (Function.prototype.bind.apply(construct.Type, args));
  }

  // class to construct
  construct.Type = Zephyr;

  // static and instance plugin method
  construct.plugin = proto.plugin = plugin;

  // hook register method, available to plugins via *this.register()*
  proto.register = register;

  // expose instantiation hooks, users may wish to manually modify
  proto.hooks = hooks;

  // reference to the main function for static assignment
  proto.main = construct;

  module.exports = construct;
})();

},{}]},{},[1]);
