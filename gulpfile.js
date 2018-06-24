var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: '.',
            js: './build',
            css: './build',
            img: './build/img/',
            fonts: './build/fonts/'
        },
        src: { //Пути откуда брать исходники
            pug: 'src/*.pug', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            js: 'src/**/*.js',//В стилях и скриптах нам понадобятся только main файлы
            sass: 'src/**/*.scss',
            img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/**/*.scss',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
    };

gulp.task('pug:html', function buildHTML() {
    return gulp.src(path.src.pug)
        .pipe(pug({
                    pretty: true
                }))
        .pipe(gulp.dest(path.build.html)); // указываем gulp куда положить скомпилированные HTML файлы
});

gulp.task('sass:css', function () {
    gulp.src(path.src.sass)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(path.build.css));
});

gulp.task('js', function(){
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js));
    return gulp.src(dest.src.js);
});

gulp.task('watch', function(){
    gulp.watch(path.src.pug, ['pug:html']);
    gulp.watch(path.src.sass, ['sass:css']);
    gulp.watch(path.src.js, ['js']);
    gulp.watch(path.src.img);
    gulp.watch(path.src.fonts);            
});