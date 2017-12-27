const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const plumber = require('gulp-plumber');


/////////DEVELOP/////////

gulp.task('es6', () => {
	return gulp.src('src/js/*.js')
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build/js'));
});

gulp.task('sass', () => {
	return gulp.src('src/sass/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('build/css'));
});

gulp.task('default', ['es6','sass'], () => {
	gulp.watch('src/js/main.js', ['es6']);
	gulp.watch('src/sass/main.scss', ['sass']);
});


/////////BUILD/////////

gulp.task('uglify', () => {
	return gulp.src('src/js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('build/js/minjs'))
});

gulp.task('minifyCss', () => {
	return gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('build/css/mincss'))
});

gulp.task('build', ['es6', 'uglify', 'sass', 'minifyCss']);




//add
//autoprefixer?
//browsersync
//inject?