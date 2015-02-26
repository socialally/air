var gulp = require('gulp')
  , phantomjs = require('gulp-mocha-phantomjs')
  , report = require('gulp-istanbul-report')
  //, gutil = require('gulp-util');

var coverageFile = './coverage/coverage.json';
gulp.task('cover', ['coverspec'], function () {
  gulp.src('test/index.html', {read: false})
    .pipe(phantomjs({
      phantomjs: {
        hooks: 'mocha-phantomjs-istanbul',
        coverageFile: './coverage/coverage.json'
      },
      reporter: 'spec'
    }))
    .on('finish', function() {
      gulp.src(coverageFile)
        .pipe(report(
          {
            reporterOpts: {
              dir: './coverage'
            },
            reporters: [
              'text-summary',
              'lcov'
            ]
          }
        ))
    });
});
