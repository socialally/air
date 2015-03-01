/**
 *  Insert content, specified by the parameter, to the end of each
 *  element in the set of matched elements.
 */
function append() {
  var i, l = this.length, el, args = Array.prototype.slice.call(arguments);
  for(i = 0;i < args.length;i++) {
    el = args[i];
    // wrap content
    el = this.air(el);
    // matched parent elements (targets)
    this.each(function(node, index) {
      // content elements to insert
      el.each(function(ins) {
        ins = (index < (l - 1)) ? ins.cloneNode(true) : ins;
        // must clone otherwise only the last matched
        // element will receive the appended element
        node.appendChild(ins);
      })
    });
  }
  return this;
}

module.exports = function() {
  this.append = append;
}
