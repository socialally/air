/**
 *  IE9 supports textContent and innerText has various issues.
 *
 *  See: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 *  See: http://www.kellegous.com/j/2013/02/27/innertext-vs-textcontent/
 */
function text(txt) {
  if(!this.length) {
    return this;
  }
  if(txt === undefined) {
    return this.dom[0].textContent;
  }
  txt = txt || '';
  this.each(function(el) {
    el.textContent = txt;
  });
  return this;
}

module.exports = function() {
  this.text = text;
}
