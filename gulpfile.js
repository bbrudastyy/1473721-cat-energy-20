const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const del = require("del");
const concat = require('gulp-concat');
const uglyfly = require('gulp-uglyfly');
const htmlmin = require('gulp-htmlmin');

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(rename("style-min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("html"));
}

exports.default = gulp.series(
  styles, server, watcher
);

//Image min

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
}

exports.image = images;

//Sprite

const sprite = () => {
  return gulp.src("source/img/**/sprite-*.svg")
  .pipe(svgstore())
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"))
}

exports.sprite = sprite;

//Copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/*.js"
    // "source/js/scrypt.js",
    // "source/js/scrypt-min.js"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

//Del

const clean = () => {
  return del("build");
};

exports.clean = clean;

//HTML

const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('./build'))
  .pipe(sync.stream());
}

exports.html = html;

//Concat
const concats = () => {
  return gulp.src('source/js/*.js')
  .pipe(concat('script.js'))
  .pipe(gulp.dest('./build/js'));
}

exports.concats = concats;

//MinJs

const minJs = () => {
  return gulp.src('build/js/script.js')
  .pipe(uglyfly())
  .pipe(rename("script-min.js"))
  .pipe(gulp.dest('./build/js'))
  .pipe(sync.stream());
}

exports.minJs = minJs;

//Build

const build = gulp.series(clean, copy, concats,  minJs, styles, sprite, html);

exports.build = build;


// Start

const start = gulp.series(build, server, watcher);

exports.start = start;
