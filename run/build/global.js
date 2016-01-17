var air = require('air');

module.exports = {
  air: air
}

air.plugin([
  require('append'),
  require('attr'),
  require('children'),
  require('class'),
  require('clone'),
  require('create'),
  require('css'),
  require('data'),
  require('dimension'),
  require('empty'),
  require('event'),
  require('find'),
  require('first'),
  require('html'),
  require('last'),
  require('remove'),
  require('text')
])

if(window) {
  window.$ = air;
}
