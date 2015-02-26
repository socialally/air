var gulp = require('gulp')
  , browserify = require('browserify')
  , gutil = require('gulp-util')
  , sourcemaps = require('gulp-sourcemaps')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer');

function bundle(main, opts) {
  var bundler = browserify(main, opts);
  return bundler.bundle()
    .on('error', gutil.log)
    .pipe(source(opts.source))
    .pipe(buffer())
     //loads map from browserify file
    .pipe(sourcemaps.init({loadMaps: true}))
     //writes .map file
    .pipe(sourcemaps.write(opts.map))
    .pipe(gulp.dest(opts.dest));
}

module.exports = bundle;
