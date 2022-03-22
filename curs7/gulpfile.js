"use strict"
const gulp = require('gulp')
// load plugin

const sass = require('gulp-sass')(require('node-sass'));

// ca sa transf fisiere sass/css in fisiere css: gulp sass
gulp.task('sass', function(){
    return gulp.src('sass/ap7.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});