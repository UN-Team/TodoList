var gulp = require('gulp'),
  watch = require('gulp-watch'),
  useref = require('gulp-useref'),
  filter = require('gulp-filter'),
  uglify = require('gulp-uglify'),
  csso = require('gulp-csso'),
  jsFilter = filter('js/*.js', {
    restore: true
  }),
  cssFilter = filter('css/**/*.css', {
    restore: true
  });
livereload = require('gulp-livereload'),
  connect = require('gulp-connect');

gulp.task('html', function () {
  gulp.src('src/*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    port: 4000,
    root: 'src/',
    livereload: true,
    open: true
  })
});

gulp.task('watch', function () {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/js/*.js', ['html']);
  gulp.watch('src/css/**/*.css', ['html']);
});

gulp.task('default', ['connect', 'watch']);

gulp.task('deploy', function () {
  return gulp.src('src/index.html')
    .pipe(useref())
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(csso())
    .pipe(cssFilter.restore)
    .pipe(gulp.dest('dist'));
});