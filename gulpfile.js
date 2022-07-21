const gulp = require("gulp");
const imageMin = require("gulp-imagemin");

function imgReduce() {
  return gulp
  .src("./src/images/*")
  .pipe(imageMin())
  .pipe(gulp.dest("./dist/images"));
}

exports.images = imgReduce;