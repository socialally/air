/**
 *  Show a modal dialog.
 *
 *  The passed element (`el`) is cloned and appended to the `container`.
 *
 *  @param opts {Object} Dialog options.
 *  @param cb {Function} A callback function for accept or reject.
 *
 *  @options:
 *
 *  - el: The dialog element (root of the markup below).
 *  - container: Parent element to append the dialog to.
 *  - modal: Whether the modal element dismisses the dialog.
 *  - remove: Whether the dialog is removed on accept or reject.
 *  - evt: The event name to listen to.
 *  - accept: Selector used to accept the dialog.
 *  - reject: Selector used to reject the dialog.
 *
 *  @markup
 *
 *  - .dialog
 *    - .modal
 *    - .container
 *      - .content
 *
 *  @css/stylus
 *
 *  .dialog
 *    position: absolute;
 *    z-index: 2000;
 *    top: 0;
 *    left: 0;
 *    width: 100%;
 *    height: 100%;
 *    display: table;
 *    .modal
 *      position: absolute;
 *      z-index: 2001;
 *      left: 0;
 *      top: 0;
 *      right: 0;
 *      bottom: 0;
 *      background: rgba(0,0,0,.8);
 *      cursor: pointer;
 *    .container
 *      display: table-cell;
 *      vertical-align: middle;
 *      text-align: center;
 *      .content
 *        position: relative;
 *        z-index: 2002;
 *
 *  @dependencies
 *
 *  - clone
 *  - css
 *  - event
 *  - find
 */
function dialog(opts, cb) {
  var $ = dialog.air
    , el = opts.el.clone(true)
    , container = opts.container || $('body')
    , evt = opts.evt || 'click'
    , res = {accepted: false, el: el};

  opts.accept = opts.accept || '[href="#ok"]';
  opts.reject = opts.reject || '[href="#cancel"]';

  // pass function to remove element in result
  // when we don't handle removing
  if(opts.remove === false) {
    res.remove = function() {
      el.remove(); 
    }
  }

  container.append(el);

  function onReject(e) {
    e.preventDefault();
    if(opts.remove !== false) {
      el.remove();
    }
    cb(res);
  }

  function onAccept(e) {
    e.preventDefault();
    if(opts.remove !== false) {
      el.remove();
    }
    res.accepted = true;
    cb(res);
  }

  var modal = el.find('.modal');
  if(opts.modal !== false) {
    modal.on(evt, onReject);
  }else{
    modal.css({cursor: 'auto'})
  }
  el.find(opts.reject).on(evt, onReject);
  el.find(opts.accept).on(evt, onAccept);

  return el;
}

module.exports = function() {
  // static method needs access to main function
  dialog.air = this.air;
  this.air.dialog = dialog;
}
