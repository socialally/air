var gulp = require('gulp')
  , config = require('../config')
  , bundle = require('../bundle')
  , sequence = require('run-sequence')
  , merge = require('merge')
  , globalmin = merge(true, config.dist.global);

globalmin.minify = true;
globalmin.source = globalmin.source.replace(/\.js$/, '.min.js');

gulp.task('dist-global-min',
  bundle.bind(null, globalmin));
gulp.task('dist-global',
  bundle.bind(null, config.dist.global));

gulp.task('dist', function(cb) {
  sequence('dist-global', 'dist-global-min', cb);
});
