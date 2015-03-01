/**
 *  Insert content, specified by the parameter, to the end of each
 *  element in the set of matched elements.
 */
function append(el) {
  var l = this.length, clone = false;
  // wrap content
  el = this.air(el);
  // matched parent elements (targets)
  this.each(function(node, index) {
    //console.log(index);
    //console.log(l);
    clone = index < (l - 1);
    //console.log(clone);
    // content elements to insert
    el.each(function(ins) {
      // must clone otherwise only the last matched
      // element will receive the appended element
      node.appendChild(clone ? ins.cloneNode(true) : ins);
    })
  });
  return this;
}

module.exports = function() {
  this.append = append;
}
