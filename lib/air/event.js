function on(nm, cb, capture) {
  this.each(function(el) {
    el.addEventListener(nm, cb, capture);
  });
  return this;
}

function off(nm, cb, capture) {
  this.each(function(el) {
    el.removeEventListener(nm, cb, capture);
  });
  return this;
}

function trigger(event, bubbles, cancelable, type) {
  bubbles = typeof(bubbles) === undefined ? true : bubbles;
  cancelable = typeof(cancelable) === undefined ? true : cancelable;
  type = type || 'HTMLEvents';
  this.each(function(el) {
    if(document.createEvent) {
      // dispatch for firefox + others
      var evt = document.createEvent("HTMLEvents");
      // event type,bubbling,cancelable
      evt.initEvent(event, bubbles, cancelable);
      return !el.dispatchEvent(evt);
    }else{
      // dispatch for IE
      var evt = document.createEventObject();
      return el.fireEvent('on' + event, evt)
    }
  });
}

function click(bubbles, cancelable) {
  return this.trigger('click', bubbles, cancelable, 'MouseEvents');
}

module.exports = function() {
  this.on = on;
  this.off = off;
  this.trigger = trigger;
  this.click = click;
}
