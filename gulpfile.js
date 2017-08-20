'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const cssmin = require('gulp-cssmin');

gulp.task('sass', () => {
    gulp.src('./scss/general.scss')
        .pipe(rename({
            basename: "zero-framework"
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./scss/**/*.scss', ['sass']);
});