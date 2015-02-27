/**
 *  Insert content, specified by the parameter, to the end of each
 *  element in the set of matched elements.
 */
function append(el) {
  var $ = this.air;
  // matched parent elements
  this.each(function(node) {
    // matched elements to insert
    $(el).each(function(ins) {
      // must clone otherwise only the last matched
      // element will receive the appended element
      node.appendChild(ins.cloneNode(true));
    })
  });
  return this;
}

module.exports = function() {
  this.append = append;
}
