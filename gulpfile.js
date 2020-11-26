const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const php = require('gulp-connect-php');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
var SCSS_SRC = ['./sass/**/*.scss'];

'use strict';


var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');


//Babel
gulp.task('es6', () => {
    return gulp.src('./src/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true
        }))
        .pipe(browserSync.reload({
            stream: true
        }));

    browserSync.reload();

});


// Gulp task to minify JavaScript files
gulp.task('minJsTask', function () {
    return gulp.src('./dist/*.js')
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('minJs'))
        .pipe(reload({
            stream: true
        }))
        .pipe(browserSync.reload({
            stream: true
        }));

    browserSync.reload();

});

gulp.task('watchPages', function () {
    /*
      @todo we should loop for each pages 
            but for this splash page we are good.
    */
    gulp.src('./*.php')
        .pipe(gulp.dest('./'))
        .pipe(reload({
            stream: true
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
    browserSync.reload();
});


gulp.task('watchIncludes', function () {
    gulp.src('./includes/*.php')
        .pipe(gulp.dest('includes'))
        .pipe(reload({
            stream: true
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
    browserSync.reload();
});


gulp.task('watchSass', async function () {
    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(concat('style.css'))
        .pipe(rename({
            basename: 'style',
            extname: '.min.css'
        }))
        .pipe(gulp.dest('css'))
        .pipe(reload({
            stream: true
        }))
        .pipe(browserSync.reload({
            stream: true
        }));

    browserSync.reload();

});

/* 
Eliminated
*/
gulp.task('watch', function () {
    // gulp.watch("./sass/*.scss", gulp.series('sass'));
    gulp.watch("./src/*.js", gulp.series('es6'));
    // gulp.watch("./css/*.css", gulp.series('minCssTask'));
    gulp.watch("./dist/*.js", gulp.series('minJsTask'));
    gulp.watch(SCSS_SRC, gulp.series('watchSass'));
});


gulp.task('browserSync', function () {
    browserSync.init({
        proxy: "localhost:8020",
        port: 8020,
        baseDir: "./",
        open: true,
        notify: false
    });
});

gulp.task('serve', gulp.parallel('browserSync', function () {
    php.server({
        base: './',
        port: 8020,
        keepalive: true
    });

    gulp.watch("./src/*.js", gulp.series('es6'));
    gulp.watch("./dist/*.js", gulp.series('minJsTask'));
    gulp.watch(SCSS_SRC, gulp.series('watchSass'));
    gulp.watch('**/*.php').on('change', function () {
        browserSync.reload();
    });

    gulp.watch('./includes/*.php').on('change', function () {
        browserSync.reload();
    });
    // gulp.watch('./*.php', gulp.series('watchPages'));
    // gulp.watch('./includes/*.php', gulp.series('watchIncludes'));
}));