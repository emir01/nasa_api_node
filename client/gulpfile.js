var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var server = require('gulp-server-livereload');

gulp.task("scripts", function (params) {
	return gulp.src(mainBowerFiles(), { base: './bower_components' })
        .pipe(gulp.dest("./js/vendor"));
});

gulp.task("content", function (params) {
  
        // Bootstrap css and fonts
        // --------------------------------------------------------
  
	     gulp.src("./bower_components/bootstrap/dist/css/*.css")
        .pipe(gulp.dest("./css/vendor/bootstrap/"));
        
        gulp.src("./bower_components/bootstrap/dist/fonts/*")
        .pipe(gulp.dest("./css/vendor/fonts"));
        
        // Slider CSS and images
        // --------------------------------------------------------
        gulp.src("./bower_components/ng-slider/dist/css/*")
        .pipe(gulp.dest("./css/vendor/slider/css"));
        
        gulp.src("./bower_components/ng-slider/dist/img/*")
        .pipe(gulp.dest("./css/vendor/slider/img"));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['scripts', 'content']);