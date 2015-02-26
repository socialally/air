var id = 'fixture'
  , selector = '#' + id;

function before(markup) {
  var el = document.querySelector(selector);
  e.innerHTML = markup || '';
}

function after(done) {
  var el = document.querySelector(selector);
  e.innerHTML = '';
  done();
}

module.exports = {
  id: id,
  selector: selector,
  before: before,
  after: after,
}
