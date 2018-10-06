var gulp = require('gulp'); // gulp core
var plumber = require('gulp-plumber'); // prevent pipeline from breaking on error
var replace  = require('gulp-replace'); // replace
var concat  = require("gulp-concat");// rename files
var livereload = require("gulp-livereload"); // livereload

var paths = {
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'assets/js/'
  }
};

/**
 * @see https://github.com/jkphl/svg-sprite/blob/master/docs/configuration.md - documentation
 * @see http://jkphl.github.io/svg-sprite/#gulp - configurator
 */

function scripts() {
 return gulp.src(paths.scripts.src, { sourcemaps: false })
   .pipe(plumber())
   .pipe(concat('script.js'))
   .pipe(gulp.dest(paths.scripts.dest))
   .pipe(livereload());
}

function watch() {
 gulp.watch(paths.scripts.src, scripts);
}

var build = gulp.series(gulp.parallel(scripts));

gulp.task('build', build);

gulp.task('default', build);
