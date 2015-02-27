// TODO: return from window.getComputedStyle() so that
// TODO: this method also retrieves styles declared in stylesheets

function css(props) {
  if(props === undefined && this.length) {
    return this.dom[0].style;
  }
  this.each(function(el) {
    el.style = el.style || {};
    for(var z in props) {
      el.style[z] = props[z];
    }
  });
  return this;
}

module.exports = function() {
  this.css = css;
}
