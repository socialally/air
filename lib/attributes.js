/**
 *  Plugin group that includes all plugins that modify element attributes.
 */
module.exports = function(conf) {
  conf.plugin([
    require('attr'),
    require('data'),
    require('class')
  ]);
}
