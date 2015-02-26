var air = require('./lib/air');

module.exports = {
  air: air,
}

// TODO: include all system plugins in this distribution

if(window) {
  window.$ = air;
}
