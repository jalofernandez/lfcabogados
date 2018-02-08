/*
* Dependencias
*/
    var gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
   minifycss = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
        less = require('gulp-less'),
 gulpIgnore  = require('gulp-ignore'),
        path = require('path'),
         pug = require('gulp-pug'),
          fs = require('fs'),
        data = require('gulp-data'),
     sitemap = require('gulp-sitemap');


/*
* Configuración de la tarea 'default' (gulp) last step to trials (dev)
*/
gulp.task('default', ['jade', 'less', 'css']);

/*
* Configuración de la tarea 'deploy' (gulp) last step to publish (deploy in prod)
*/
gulp.task('deploy', ['js', 'jade', 'less', 'css', 'img', 'sitemap']);

/*
* Configuración de la tarea 'js' --> gulp-concat + gulp-uglify (gulp js)
*/
gulp.task('js', function () {
  gulp.src('js/*.js')
  .pipe(concat('otherscripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js'))
});

/*
* Configuración de la tarea 'less' --> gulp-less (gulp less)
*/
gulp.task('less', function () {
  return gulp.src('./less/**/[^_]*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

/*
* Configuración de la tarea 'css' --> gulp-clean-css (gulp css)
*/
gulp.task('css', function() {
  return gulp.src('css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'));
});

/*
* Configuración de la tarea 'img' --> gulp-imagemin (gulp img)
*/
gulp.task('img', function () {
    return gulp.src(['img/**/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img'));
});

/*
 * Configuración de la tarea 'pug' --> gulp-pug (gulp pug)
 */
gulp.task('pug', function() {
    return gulp.src('./templates/*.pug')
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync('./locales/lang_es.json'))
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./public'));
});

/*
* Configuración de la tarea 'sitemap' --> gulp-sitemap (gulp sitemap)
*/
gulp.task('sitemap', function () {
  gulp.src('public/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'http://www.lfcabogados.com',
            changefreq: 'weekly',
            priority: '1.0'
        }))
        .pipe(gulp.dest('./public'));
});
