'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifycss = require('gulp-uglifycss'),
    autoprefixer = require('gulp-autoprefixer'),
		livereload = require('gulp-livereload');
 
gulp.task('sass', function () { 
  return gulp.src('sass/**/*.scss')  
    .pipe(sass())
    .pipe(autoprefixer()) 
    .pipe(uglifycss())
		.pipe(livereload())
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () { 
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
}); 