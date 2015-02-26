var gulp = require('gulp')
  , config = require('../config')
  , bundle = require('../bundle');


gulp.task(
  'dist-global',
  bundle.bind(null, config.dist.global.main, config.dist.global.options));

gulp.task('dist', ['dist-global']);
