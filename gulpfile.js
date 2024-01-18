var gulp = require("gulp");
var concat = require("gulp-concat");
var prefix = require("gulp-autoprefixer");
//taske csss
gulp.task("css", function () {
  return gulp
    .src("project/*.css")
    .pipe(prefix())
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist"));
});
//taske js
gulp.task("scripts", function () {
  return gulp
    .src("project/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("dist"));
});
