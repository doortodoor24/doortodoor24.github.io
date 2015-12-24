var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var cleancss = new LessPluginCleanCSS({ advanced: true });
var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

var htmlmin = require('gulp-htmlmin');

var del = require('del');

var imagemin = require('gulp-imagemin');


gulp.task('default', ['clean'], function() {
    gulp.start('less', 'mincss', 'minhtml','minimages');
});

gulp.task('less', function () {
    return gulp.src('./src/css/less/style.less')
        .pipe(less({plugins:[autoprefix, cleancss]}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'));
});
gulp.task('mincss', function () {
    return gulp.src('./src/css/lib/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css/lib'));
});
gulp.task('minhtml', function() {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({collapseWhitespace: true,removeComments:true,removeEmptyAttributes:true}))
        .pipe(gulp.dest('./'))
});
gulp.task('clean', function() {
    return del(['./css', './images', './index.html']);
});

gulp.task('minimages', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('./images'))
        .pipe(notify({ message: 'Images task complete' }));
});