/**
 *  Plugin group that includes all plugins that modify element attributes.
 */
module.exports = function() {
  this.plugin([
    require('attr'),
    require('class'),
    require('data')
  ]);
}
