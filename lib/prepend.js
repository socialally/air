/**
 *  Insert content, specified by the parameter, to the beginning of each
 *  element in the set of matched elements.
 */
function prepend() {
  var i, l = this.length, el, args = Array.prototype.slice.call(arguments);
  for(i = 0;i < args.length;i++) {
    // wrap content
    el = this.air(args[i]);
    // matched parent elements (targets)
    this.each(function(node, index) {
      // content elements to insert
      el.each(function(ins) {
        ins = (index < (l - 1)) ? ins.cloneNode(true) : ins;
        // no children yet - append
        if(!node.firstChild) {
          node.appendChild(ins);
        // insert before first child
        }else{
          node.insertBefore(ins, node.firstChild);
        }
      })
    });
  }
  return this;
}

module.exports = function() {
  this.prepend = prepend;
}
