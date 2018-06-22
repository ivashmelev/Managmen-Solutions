var gulp = require('gulp');
var sass = require('gulp-sass');
var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: './build/../',
            js: './build/../',
            css: '/build/../',
            img: './build/img/',
            fonts: './build/fonts/'
        },
        src: { //Пути откуда брать исходники
            html: 'src/**/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
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

gulp.task('pug:html', function(){
    gulp.src(path.src.html).pipe(gulp.dest(path.build.html));
    return gulp.src(dest.src.style);
});

gulp.task('sass', function(){
    gulp.src(path.src.sass).pipe(gulp.dest(path.build.css));
    return gulp.src(path.build.sass);    
});

gulp.task('watch', function(){
    gulp.watch(path.src.html);
    gulp.watch(path.src.sass);
    gulp.watch(path.src.js);
    gulp.watch(path.src.img);
    gulp.watch(path.src.fonts);            
});