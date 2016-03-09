require('babel-core/register')
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

process.env.NODE_ENV = 'test'
process.env.BEBEL_ENV = 'test'

gulp.task('testone', function() {
  var what = process.argv[4];
  return gulp.src('test/**/*_test.js', {read: false})
    .pipe(mocha({reporter: 'spec', grep: what}));
});

gulp.task('lint', function() {
  return gulp.src(['app/**/*.js'])
    .pipe(eslint('eslint.config.json'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test-api', function () {
  return gulp.src('test/api/**/*_test.js', {read: false})
    .pipe(mocha({reporter: 'spec', bail: true}));
});

gulp.task('test-fe', function () {
  return gulp.src('test/fe/**/*_test.jsx', {read: false})
    .pipe(mocha({reporter: 'spec', bail: true}));
});

gulp.task('default', ['lint'], function() {
  nodemon({
    script: './api/server.js',
    ext: 'js json',
    ignore: 'fe/',
    env: {
      'NODE_ENV': 'development'
    },
    tasks: ['lint']
  }).on('restart', function() {
    console.log('---------------------------------------------------------');
  });
});
