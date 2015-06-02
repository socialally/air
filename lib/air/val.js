var TEXTAREA  = 'textarea';

/**
 *  Get the current value of the first element in the set of
 *  matched elements or set the value of every matched element.
 */
function val(value) {
  var first = this.get(0);

  function getValue(el) {
    var nm = el.tagName.toLowerCase();
    return el.value;
  }

  function setValue(el, value) {
    var nm = el.tagName.toLowerCase();
    //console.log('set value: ' + nm)
    //console.log('set value: ' + value)
    if(nm === TEXTAREA) {
      while(el.childNodes.length) {
        el.removeChild(el.childNodes[0])
      }
      el.appendChild(document.createTextNode(value));
    }else{
      el.value = value;
    }
  }

  if(value === undefined && first) {
    return getValue(first);
  }else if(value) {
    this.each(function(el) {
      setValue(el, value);
      //el.value = value;
    })
  }
  return this;
}

module.exports = function() {
  this.val = val;
}
