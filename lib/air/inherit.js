/**
 *  Lightweight ECMAScript 5 inheritance.
 *
 *  @see http://stackoverflow.com/a/12816953
 */
module.exports = function() {
  this.air.inherit = function(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
  }
}
