var air = require('./lib/air');

module.exports = {
  air: air,
}

if(window) {
  window.$ = air;
}
