var gulp         = require('gulp'),
	connect      = require('gulp-connect')
	sass         = require('gulp-sass')
	sourcemaps   = require('gulp-sourcemaps')
	autoprefixer = require('gulp-autoprefixer');

app  = 'app/';
dist = 'dist/'

var paths = {
	app: {
		html: app + '**/*.html',
		sass: app + 'assets/scss/**/*.scss',
		js: app + 'assets/js/**/*.js'
	},
	dist: {
		html: dist,
		css: dist + 'assets/css/',
		js: dist + 'assets/js/'
	}
}

gulp.task('serve', function(){
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('watch', function(){
	gulp.watch(paths.app.html, ['html']);
	gulp.watch(paths.app.sass, ['sass']);
	gulp.watch(paths.app.js, ['js']);
});

gulp.task('html', function() {
	gulp.src(paths.app.html)
		.pipe(gulp.dest(paths.dist.html))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	sass_options = {
		includePaths: require('node-normalize-scss').includePaths
	};
	autoprefixer_options = {
		browsers: ['last 2 versions'],
		cascade: false
	};

	gulp.src(paths.app.sass)
		.pipe(sourcemaps.init())
			.pipe(sass(sass_options).on('error', sass.logError))
			.pipe(autoprefixer(autoprefixer_options))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.dist.css))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src(paths.app.js)
		.pipe(gulp.dest(paths.dist.js))
		.pipe(connect.reload());
});

gulp.task('default', ['html', 'sass', 'js', 'serve', 'watch']);