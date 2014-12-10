var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    csso = require('gulp-csso');

gulp.task('default', function() {
    gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions', 'Opera 12.1', 'ie 9', 'ie 8'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css'));
});