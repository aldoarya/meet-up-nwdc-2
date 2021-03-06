var gulp        = require('gulp');
var babel       = require('gulp-babel');
var browserSync = require('browser-sync').create();


gulp.task('html', function () {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('css', function () {
    return gulp.src('src/style.css')
    .pipe(gulp.dest('dist'))
})

gulp.task('js', function(){
    return gulp.src('src/index.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('compile', gulp.parallel(['html', 'css', 'js']))

gulp.task('serve', function() {

    browserSync.init({
        server: {baseDir: "./dist/"}
    });

    gulp.watch("./src/*.js", gulp.series('js'));
    gulp.watch("./src/*.css", gulp.series('css'));
    gulp.watch("./src/*.html", gulp.series('html'));

    gulp.watch("./dist/*.+(html|css|js)", function(done) {
        browserSync.reload();
        done();
    });
    }   
);

gulp.task('run', gulp.series(['compile', 'serve']))