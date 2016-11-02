/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
cleanCSS = require('gulp-clean-css'),
imagemin = require('gulp-imagemin');

/*
* Configuración de la tarea 'default' (gulp)
*/
gulp.task('default', ['js', 'css', 'img']);

/*
* Configuración de la tarea 'js' --> gulp-concat + gulp-uglify (gulp js)
*/
gulp.task('js', function () {
  gulp.src('js/sources/*.js')
  .pipe(concat('otherscripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/dist/'))
});

/*
* Configuración de la tarea 'css' --> gulp-clean-css (gulp css)
*/
gulp.task('css', function() {
  return gulp.src('css/sources/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/dist'));
});

/*
* Configuración de la tarea 'img' --> gulp-imagemin (gulp img)
*/
gulp.task('img', function () {
    return gulp.src(['img/*/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('img/dist'));
});