const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const del = require("del");
const sync = require("browser-sync").create();
const gulpStylelint = require("gulp-stylelint");
const eslint = require("gulp-eslint");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const webpackConfigMin = require("./webpack.config.min.js");

function html() {
  return src("src/**.html").pipe(dest("dev"));
}

function htmlMin() {
  return src("src/**.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("build"));
}

function script() {
  return src("src/index.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(dest("dev"));
}

function scriptMin() {
  return src("src/index.js")
    .pipe(webpackStream(webpackConfigMin), webpack)
    .pipe(dest("build"));
}

function scss() {
  return src("src/scss/**.scss")
    .pipe(
      gulpStylelint({
        reporters: [
          {
            formatter: "string",
            console: true,
          },
        ],
      })
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
      })
    )
    .pipe(concat("index.css"))
    .pipe(dest("dev"));
}

function scssMin() {
  return src("src/scss/**.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
      })
    )
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(dest("build"));
}

function clear() {
  return del("dev");
}
function clearBuild() {
  return del("build");
}

function serve() {
  sync.init({
    server: "./dev",
  });

  watch("src/**.html", series(html)).on("change", sync.reload);
  watch("src/scss/**.scss", series(scss)).on("change", sync.reload);
  watch("src/index.js", series(script)).on("change", sync.reload);
}

exports.clear = clear;
exports.clearBuild = clearBuild;
exports.dev = series(clear, scss, script, html, serve);
exports.build = series(clearBuild, scssMin, scriptMin, htmlMin);
