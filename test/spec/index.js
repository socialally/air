module.exports = {
  // core functionality
  exports: require('./exports'),
  core: require('./core'),
  get: require('./get'),
  plugin: require('./plugin'),

  // plugin tests
  append: require('./append'),
  attr: require('./attr'),
  class: require('./class'),
  create: require('./create'),
  data: require('./data'),
}
