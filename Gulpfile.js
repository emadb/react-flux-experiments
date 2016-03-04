var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

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

gulp.task('test', function () {
    return gulp.src('test/**/*_test.js', {read: false})
        .pipe(mocha({reporter: 'spec', bail: true}));
});

gulp.task('default', ['lint'], function() {
  nodemon({
    script: './api/server.js',
    ext: 'js json',
    env: {
      'NODE_ENV': 'development'
    },
    tasks: ['lint']
  }).on('restart', function() {
    console.log('---------------------------------------------------------');
  });
});
