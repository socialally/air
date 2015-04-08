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
