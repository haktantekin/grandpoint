// if you want run write 'gulp watch' in console.

"use strict";

// Load plugins
var gulp = require("gulp"),
sass = require("gulp-sass"),
concat = require('gulp-concat'),
 minifyCSS = require('gulp-minify-css'),
 uglify = require('gulp-uglify');

// CSS task
function css() {
  return gulp
    .src(
      [
        "./assets/css/layout/bootstrap.min.css",
        "./assets/css/layout/fa.min.css",
        "./assets/css/layout/swiper.css",
        "./assets/css/layout/headerfix.css",
        "./assets/css/layout/style.scss"
      ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('iq-min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/public/css'));
}
function scriptsLint() {
  return gulp
    .src(["./assets/scripts/*", "./gulpfile.js"])
}
function scripts() {
  return (
    gulp
      .src([
        "./assets/js/plugins/jquery-3.5.1.min.js",
        "./assets/js/plugins/swiper.js",
        "./assets/js/plugins/jquery.slidereveal.min.js",
        "./assets/js/plugins/headroom.min.js",
         "./assets/js/plugins/lazyload.js",
        "./assets/js/plugins/sticky.js",
        "./assets/js/plugins/readmore.js",
    ])
    .pipe(uglify())
    .pipe(concat('iq-min.js'))
    .pipe(gulp.dest("./assets/public/js"))
  );
}


// Watch files
function watchFiles() {
  gulp.watch("./assets/css/layout/*", css);
  gulp.watch("./assets/js/plugins/*", gulp.series(scriptsLint, scripts));
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(gulp.parallel(css, js));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.css = css;
exports.js = js;
exports.watch = watch;