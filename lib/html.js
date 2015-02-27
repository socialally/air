/**
 *  Get the HTML of the first matched element or set the HTML
 *  content of all matched elements.
 */
function html(markup, outer) {
  if(!this.length) {
    return this;
  }
  if(typeof markup === 'boolean') {
    outer = markup;
  }
  var prop = outer ? 'outerHTML' : 'innerHTML';
  if(markup === undefined) {
    return this.dom[0][prop];
  }
  this.each(function(el) {
    el[prop] = markup;
  });
  return this;
}

module.exports = function() {
  this.html = html;
}
