var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hooray - you creayed a gulp task.");
});

gulp.task("html", function(){
    console.log("You did great Hmd!");
});

gulp.task("styles", function(){
    console.log("You did great Hamoud Hmd!");
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    
    watch('./app/css/**/*.css', function() {
        gulp.start('styles');
    });
});