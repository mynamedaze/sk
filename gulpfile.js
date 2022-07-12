//Подключаем модули галпа
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

function style() {
    return gulp.src('serviskomfort/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('serviskomfort/css'))
        .pipe(browserSync.reload({stream: true}));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("serviskomfort/sass/**/*.{scss,sass}", style);
    gulp.watch("*.html").on("change", browserSync.reload);
}

gulp.task('watch', watch);