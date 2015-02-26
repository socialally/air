var id = 'fixture'
  , selector = '#' + id;

function before(markup) {
  var el = document.querySelector(selector);
  el.innerHTML = markup || '';
}

function after(done) {
  var el = document.querySelector(selector);
  el.innerHTML = '';
  done();
}

module.exports = {
  id: id,
  selector: selector,
  before: before,
  after: after,
}
