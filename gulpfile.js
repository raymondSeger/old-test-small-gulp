const gulp = require("gulp");
const minify = require("gulp-minify");

gulp.task('minify', () => {
  return gulp.src('*.js', { allowEmpty: true }) 
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest('public/js'))
})

gulp.task('default', gulp.series(['minify']));