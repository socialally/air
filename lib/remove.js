/**
 *  Remove all matched elements.
 */
function remove() {
  this.each(function(el) {
    if(el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
  return this;
}

module.exports = function() {
  this.remove = remove;
}
