function text(txt) {
  if(txt === undefined && this.length) {
    return this.dom[0].textContent !== undefined
      ? this.dom[0].textContent : this.dom[0].innerText;
  }
  txt = txt || '';
  this.each(function(el) {
    el.textContent = el.innerText = txt;
  });
  return this;
}

module.exports = function() {
  this.text = text;
}
