
const gulp = require('gulp');
const browserSync = require('browser-sync');

function watch() {
    browserSync.create().watch('./app/**/*.*', () => {
        browserSync.reload('index.html');
    });
    
    browserSync({
        server: './app/',
    });
}


exports.default = watch;