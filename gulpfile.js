var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');
var del = require('del');
var browserSync = require('browser-sync');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var pages = require('./app/data/pages.json');
var reload = browserSync.reload;

var paths = {
    scripts: 'app/scripts/**/*',
    images: 'app/images/**/*',
    scss: 'app/scss/**/*.scss',
    partials: 'app/partials/**/*',
    templates: 'app/templates/**/*',
    data: 'app/data/**/*',
    html: 'app/**/*.html',
    fonts: 'app/fonts/**/*',
    destination: 'dist'
};

var pathsDist = {
    scripts: 'dist/scripts/**/*',
    images: 'dist/images/**/*',
    css: 'dist/css/**/*',
    html: 'dist/**/*.html',
    fonts: 'dist/fonts/**/*',
    destination: 'dist'
}

// clean dist
gulp.task('clean', function () {
    del([paths.destination]);
});
// styles
gulp.task('styles', function () {
    return sass('app/scss/*.scss')
        .pipe(autoprefixer('last 3 version'))
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({
            stream: true
        }));
});
// scripts
gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(gulp.dest('dist/scripts'));
});
// images
gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/images'));
});
// fonts
gulp.task('fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('dist/fonts'));
});
// create templates with handlebars
gulp.task('handlebars', function() {
    options = {
        batch : ['./app/partials']
    }
    
    for(var i=0; i<pages.length; i++) {
        var page = pages[i],
            fileName = page.pageId.replace(/ +/g, '-').toLowerCase();

        gulp.src(paths.templates)
            .pipe(handlebars(page, options))
            .pipe(rename(fileName + ".html"))
            .pipe(gulp.dest('./dist'));
    }
});


// build site in dist
gulp.task('build', ['handlebars','scripts','images','fonts','styles']);

// watch files for changes
gulp.task('serve', ['build'], function () {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
    // styles watch
    gulp.watch(paths.scss, ['styles']);
    // scripts watch
    gulp.watch(paths.scripts, ['scripts']);
    // build html watch
    gulp.watch([paths.partials, paths.templates, paths.data], ['build']);
    // watch images
    gulp.watch(paths.images, ['images']);
    // watch everything else
    gulp.watch([pathsDist.html, pathsDist.images, pathsDist.scripts, pathsDist.fonts], reload);
});