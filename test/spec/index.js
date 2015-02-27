module.exports = {
  // core functionality
  exports: require('./exports'),
  core: require('./core'),
  get: require('./get'),
  plugin: require('./plugin'),

  // plugin tests
  append: require('./append'),
  class: require('./class'),
  create: require('./create'),
  attr: require('./attr'),
}
