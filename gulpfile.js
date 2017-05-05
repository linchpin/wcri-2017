'use strict';

var gulp         = require( 'gulp' ),
	sass         = require( 'gulp-sass' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	watch        = require( 'gulp-watch' );

// Sass
gulp.task( 'sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe( sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe( gulp.dest('./css') );
} );

// Autoprefixer
gulp.task( 'autoprefixer', ['sass'], function() {
	return gulp.src( './css/*.css' )
		.pipe( autoprefixer({
			browsers: ['last 3 versions', 'iOS 7'],
			cascade: false
		}) )
		.pipe( gulp.dest('./css') );
} );


// Watch
gulp.task( 'watch', ['sass'], function() {
	gulp.watch('./scss/**/*.scss', ['sass', 'autoprefixer']);
} );


// Default "gulp" task
gulp.task('default', [
	'sass',
	'autoprefixer',
	'watch'
]);