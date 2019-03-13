const gulp      = require('gulp'),
  del           = require('del'), //删除
  browserSync   = require('browser-sync'), //服务器同步刷新
  gulpif        = require('gulp-if'), //判断
  // babel      = require('gulp-babel'),
  minimist      = require('minimist'), //获取命令参数
  plumber       = require('gulp-plumber'), //忽视错误
  rev           = require('gulp-rev'),
  revCollector  = require('gulp-rev-collector'),
  // minifyHTML = require('gulp-minify-html'),
  gulpSequence  = require('gulp-sequence'); //同步执行

const postcss   = require('gulp-postcss'),
  sass          = require('gulp-sass');
autoprefixer    = require('autoprefixer'), //处理前缀
  cssnano       = require('cssnano'), //css压缩
  pxtorem       = require('postcss-pxtorem'), // pxtorem
  smushit       = require('gulp-smushit'), //图片压缩
  uglify        = require('gulp-uglify'), //js压缩混淆
  eslint        = require('gulp-eslint'); //js 标准


let knownOptions = {
    string: 'env',
    default: {
      env: process.env.NODE_ENV || 'production'
    }
  },
  options = minimist(process.argv.slice(2), knownOptions);

console.log(`================== env:  ${options.env} ======================`);


// 实现文件更改后浏览器即时刷新
gulp.task('serve', () => {
  browserSync.init({
    //指定服务器启动根目录
    server        : './dist',
    logLevel      : 'info',
    logFileChanges: true,
    notify        : false
  });
  //监听 html, Less ,js, 图片编译
  gulp.watch('app/*.html', ['html']);
  gulp.watch('app/css/**/*.scss', ['css']);
  gulp.watch('app/js/**/*.js', ['js', 'lint']);
  gulp.watch('./app/images/**/*.*', ['img']);
  //监听任何文件变化，实时刷新页面
  gulp.watch('./app/**/*.*').on('change', browserSync.reload);
});

//处理html
gulp.task('html', () => {
  return gulp.src(['./rev/**/*.json', './app/*.html'])
    .pipe(plumber())
    .pipe(
      gulpif(options.env === 'production', revCollector({
        replaceReved: true,
        dirReplacements: {
          'css': './css',
          'js': './js'
        }
      }))
    )
    .pipe(gulp.dest('./dist'));
});

//处理js eslint
gulp.task('lint', () => {
  return gulp.src([
      './app/js/**/*.js'
    ])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
});

//处理js
gulp.task('js', () => {
  return gulp.src('./app/js/**/*.js')
    .pipe(plumber())
    // .pipe(babel()) // 开启关闭babel
    // .pipe(babel({
    //     presets: ['es2015', 'stage-2'],
    //     ignore: ['./app/js/libs/*.min.js.js', './app/js/libs/artTemplate.js']
    // }))
    // .pipe(gulpif(options.env === 'production', uglify()))
    // .pipe(gulpif(options.env === 'production', rev()))
    .pipe(gulp.dest('./dist/js'))
    // .pipe(gulpif(options.env === 'production', rev.manifest()))
    // .pipe(gulpif(options.env === 'production', gulp.dest('./rev/js')));
});

//处理css
gulp.task('css', () => {
  let plugins = [
    autoprefixer({
      browsers: [
        "> 1%",
        "last 2 versions",
        "Android >= 3.2",
        "Firefox >= 20",
        "iOS 7",
        'not ie < 9'
      ],
      flexbox: 'no-2009'
    }),
    pxtorem({
      rootValue: 40, // 40px = 1rem，750设计稿下
      'propList': ['*']
    })
    // cssnano()
  ];
  return gulp.src(['./app/css/*.scss', './app/css/libs/*.scss'])
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    // .pipe(gulpif(options.env === 'production', rev()))
    .pipe(gulp.dest('./dist/css'))
    // .pipe(gulpif(options.env === 'production', rev.manifest()))
    // .pipe(gulpif(options.env === 'production', gulp.dest('./rev/css')));
});

//处理图片
gulp.task('img', () => {
  return gulp.src('./app/images/**/*.{png,jpg,jpeg,gif,ico}')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/images'));
});

//删除文件
gulp.task('clean', () => {
  return del(['dist', 'rev']);
});

//开发环境
gulp.task('default', gulpSequence('clean', 'css', 'lint', 'js', 'img', 'html', 'serve'));
//生产环境
gulp.task('build', gulpSequence('clean', 'css', 'js', 'img', 'html', 'lint'));