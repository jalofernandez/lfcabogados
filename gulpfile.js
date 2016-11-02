/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('default', function () {
  gulp.src('js/sources/*.js')
  .pipe(concat('otherscripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/dist/'))
});