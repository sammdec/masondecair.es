var gulp = require('gulp'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-minify-css'),
    exec = require('gulp-exec'),
    cache = require('gulp-cache');

gulp.task('css', function() {
  gulp.src('assets/css/main.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('jekyll', function() {
  gulp.src('')
    .pipe(exec('bundle exec jekyll build -w'));
});

gulp.task('images', function() {
  gulp.src('assets/img/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('assets/img'))
});

gulp.task('watch', function() {
  gulp.watch('assets/css/**/*.scss', ['css']);
  gulp.watch('assets/img/*', ['images']);
});

gulp.task('default', ['css', 'images', 'jekyll', 'watch']);