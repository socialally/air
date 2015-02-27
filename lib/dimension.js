'use strict'

function width() {
  if(!arguments.length && this.length) {
    return this.dom[0].innerWidth;
  }
  // TODO
  return this;
}

function height() {
  if(!arguments.length && this.length) {
    return this.dom[0].innerHeight;
  }
  // TODO
  return this;
}

module.exports = function() {
  this.width = width;
  this.height = height;
}
