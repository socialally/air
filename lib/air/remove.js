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
    if(el.parentNode) {
      el.parentNode.removeChild(el);
      this.dom.splice(i, 1);
      i--;
    }
  }
  return this;
}

module.exports = function() {
  this.remove = remove;
}
