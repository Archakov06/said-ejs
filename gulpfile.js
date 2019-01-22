var gulp = require("gulp");
var ejs = require("gulp-ejs");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("ejs", function() {
  return gulp
    .src("./ejs/index.ejs")
    .pipe(ejs({}, {}, { ext: ".html" }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("said", function() {
  return gulp
    .src("./scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sledit", function() {
  gulp.watch("./ejs/*.ejs", gulp.series("ejs"));
  gulp.watch("./scss/app.scss", gulp.series("said"));
});

// gulp.task('default', ['ejs']);
