/**
 *  Reduce the set of matched elements to those that match the selector
 *  or pass the function's test.
 */
function filter(selector) {
  var arr = [], $ = this.air;
  this.each(function(el) {
    var selections;
    if(typeof selector === 'function') {
      if(selector.call(el)) {
        arr.push(el);
      }
    }else{
      selections = $(selector);
      if(~selections.dom.indexOf(el)) {
        arr.push(el);
      }
    }
  });
  return $(arr);
}

module.exports = function() {
  this.filter = filter;
}
