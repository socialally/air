var gulp = require('gulp')
  , config = require('../config')
  , bundle = require('../bundle')
  , sequence = require('run-sequence')
  , merge = require('merge')
  , global = config.dist.global
  , globalmin = merge(true, config.dist.global);

globalmin.minify = true;
globalmin.source = globalmin.source.replace(/\.js$/, '.min.js');

gulp.task('dist-global-min',
  bundle.bind(null, globalmin));
gulp.task('dist-global',
  bundle.bind(null, global));

gulp.task('dist', function(cb) {
  sequence('dist-global', 'dist-global-min', cb);
});
