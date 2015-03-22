var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('cleanBuild', function (cb) {
	var rimraf = require('rimraf');
	rimraf('./build/', cb);
});

gulp.task('copyIndex', ['cleanBuild'], function () {
	return gulp.src(['./src/index.html'])
		.pipe(gulp.dest('./build/'));
});

gulp.task('webpack', ['copyIndex'], function (cb) {
	var gulpWebpack = require('gulp-webpack');
	var config = {
		entry: './src/main.js',
		output: {
			filename: './build/bundle.js'
		},
		devtool: 'inline-source-map',
		module: {
			loaders: [
		{ test: /\.js$/, loader: 'babel-loader' }
		]
		},
		resolve: {
			extensions: ['', '.js']
		}
	};

	return gulp.src('')
	.pipe(gulpWebpack(config))
	.pipe(gulp.dest(''));
});



gulp.task('test:clean', function (cb) {
	var rimraf = require('rimraf');
	rimraf('./testSandbox/', cb);
});

gulp.task('test:compile', ['test:clean'], function () {
	var babel = require("gulp-babel");
	return gulp.src("src/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("./testSandbox/src"));
});

gulp.task('test:testUtil', ['test:compile'], function () {
	var argv = require('minimist')(process.argv.slice(2));
	var mocha = require('gulp-mocha');
	console.dir(argv);
	return gulp.src('./testSandbox/' + argv.path)
	.pipe(mocha({}));
});
