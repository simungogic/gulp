const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('node-sass'));
const cssNano = require('gulp-cssnano');

gulp.task('js', function () {
    return gulp.src('src/*.js')    
    .pipe(babel({ presets: [ '@babel/preset-env' ] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
    return gulp.src('src/style.scss')
    .pipe(sass())
    .pipe(cssNano())
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch('src/index.js', gulp.series('js'));
    gulp.watch('src/style.scss', gulp.series('sass'));
});