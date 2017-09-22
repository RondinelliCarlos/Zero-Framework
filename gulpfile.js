var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin');

// pasrta sass/scss
var sassFiles = 'sass/zero.scss';
//destino
var cssDest = 'css/';
var sassDevOptions = {
	outputStyle: 'expanded'
}
var sassProdOptions = {
	outputStyle: 'compressed'
}
gulp.task('sassdev', function(){
	return gulp.src(sassFiles)
		.pipe(sass(sassDevOptions).on('error', sass.logError))
		.pipe(gulp.dest(cssDest));
});

gulp.task('sassprod', function(){
	return gulp.src(sassFiles)
		.pipe(sass(sassProdOptions).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch(sassFiles, ['sassdev', 'sassprod']);
});

gulp.task('image_min' ,function(){
	gulp.src('img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img/'));
});

gulp.task('default', ['sassdev', 'sassprod', 'watch', 'image_min']);

