var gulp = require('gulp')
  , browserify = require('browserify')
  , gutil = require('gulp-util')
  , uglify = require('gulp-uglify')
  , size = require('gulp-size')
  , sourcemaps = require('gulp-sourcemaps')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer');

function bundle(main, opts) {
  var bundler = browserify(main, opts);
  var useSourceMap = opts.map !== false;
  return bundler.bundle()
    .on('error', gutil.log)
    .pipe(source(opts.source))
    .pipe(buffer())
    // loads map from browserify file
    .pipe(useSourceMap ? sourcemaps.init({loadMaps: true}) : gutil.noop())
    // report size before writing source map.
    .pipe(size({title:'js'}))
    // writes .map file
    .pipe(useSourceMap ? sourcemaps.write(opts.map) : gutil.noop())
    .pipe(gulp.dest(opts.dest));
}

module.exports = bundle;
