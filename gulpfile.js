const gulp = require('gulp');
const connect = require('gulp-connect');
const server = require('gulp-server');
const webser = require('gulp-webserver');

gulp.task('ser', function () {
    connect.ser({
        root: './',
        port: 3000,
        livereload: true
    })
    gulp.watch(['./index.html', './js/*.js', './css/*'], ['html']);
})

gulp.task('html', function (cb) {
    gulp.src(['./index.html']).pipe(connect.reload())
    cb()
})