var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

gulp.task('build-img', function() {

    gulp.src('src/img/**/*')

    .pipe(imagemin())

    // destination of the result from imagemin() pipe
    .pipe(gulp.dest('src/dist/img'))

})

gulp.task('task', function(){
    console.log('my task is running (or not)')
})