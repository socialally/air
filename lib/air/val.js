var TEXTAREA  = 'textarea'
  , SELECT = 'select'
  , RADIO = 'radio';

function getSelectValues(el) {
  var result = []
    , options = el && el.options
    , opt;
  for(var i = 0;i < options.length;i++) {
    opt = options[i];
    if(opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}

function setSelectValues(el, value) {
  var delimiter = el.getAttribute('data-delimiter') || ','
    , options = el && el.options
    , values = value.split(delimiter);
  for(var i = 0;i < options.length;i++) {
    opt = options[i];
    if(opt.value && ~values.indexOf(opt.value)) {
      opt.setAttribute('selected', '');
    }
  }
}


/**
 *  Get the current value of the first element in the set of
 *  matched elements or set the value of every matched element.
 */
function val(value) {
  var first = this.get(0);

  function getValue(el) {
    var nm = el.tagName.toLowerCase();
    if(nm === SELECT) {
      return getSelectValues(el).join(
        el.getAttribute('data-delimiter') || ',');
    }
    return el.value;
  }

  function setValue(el, value) {
    var nm = el.tagName.toLowerCase();
    if(nm === TEXTAREA) {
      while(el.childNodes.length) {
        el.removeChild(el.childNodes[0])
      }
      el.appendChild(document.createTextNode(value));
    }else if(nm === SELECT) {
      setSelectValues(el, value);
    }else if(el.getAttribute('type') === RADIO) {
      el.setAttribute('checked', '');
    }else{
      el.value = value;
    }
  }

  if(value === undefined && first) {
    return getValue(first);
  }else if(value) {
    this.each(function(el) {
      setValue(el, value);
    })
  }
  return this;
}

module.exports = function() {
  this.val = val;
}
