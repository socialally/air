module.exports = {
  // core functionality
  exports: require('./exports'),
  core: require('./core'),
  get: require('./get'),

  // plugin tests
  append: require('./append'),
  attr: require('./attr'),
  children: require('./children'),
  class: require('./class'),
  clone: require('./clone'),
  create: require('./create'),
  css: require('./css'),
  data: require('./data'),
  dimension: require('./dimension'),
  empty: require('./empty'),
  find: require('./find'),
  first: require('./first'),
  html: require('./html'),
  last: require('./last'),
  prepend: require('./prepend'),
  remove: require('./remove'),
  text: require('./text'),
}
