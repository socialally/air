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
