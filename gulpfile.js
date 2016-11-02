/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
cleanCSS = require('gulp-clean-css');

/*
* Configuración de la tarea 'default' (gulp)
*/
gulp.task('default', ['css', 'js']);

/*
* Configuración de la tarea 'js' (gulp js)
*/
gulp.task('js', function () {
  gulp.src('js/sources/*.js')
  .pipe(concat('otherscripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/dist/'))
});

/*
* Configuración de la tarea 'minify-css' (gulp css)
*/
gulp.task('css', function() {
  return gulp.src('css/sources/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/dist'));
});