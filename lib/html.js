/**
 *  Get the HTML of the first matched element or set the HTML
 *  content of all matched elements.
 *
 *  Note that when using `outer` to set `outerHTML` you will likely invalidate
 *  the current encapsulated elements and need to re-run the selector to
 *  update the matched elements.
 */
function html(markup, outer) {
  if(!this.length) {
    return this;
  }
  if(typeof markup === 'boolean') {
    outer = markup;
    markup = undefined;
  }
  var prop = outer ? 'outerHTML' : 'innerHTML';
  if(markup === undefined) {
    return this.dom[0][prop];
  }
  markup = markup || '';
  this.each(function(el) {
    el[prop] = markup;
  });
  // TODO: should we remove matched elements when setting outerHTML?
  // TODO: the matched elements have been rewritten and do not exist
  // TODO: in the DOM anymore: ie: this.dom = [];
  return this;
}

module.exports = function() {
  this.html = html;
}
