/*什么是gulp

  是前端对代码进行构建的工具（前端自动化构建工具），是基于nodejs的自动任务运行器，可以对文件进行检查，合并，压缩，格式化，浏览器自动刷新，部署文件生成等等，大大提高我们的工作效率。

  gulp 全局安装后还需要再每个项目中单独安装一次，也就是本地安装
  npm install gulp -g

  本地安装（开发依赖）
  npm install gulp --sava-dev // 如果使用gulp的功能还需本地安装

  gulp 常用插件
  1、gulp-concat---> 合并js
  2、gulp-cssmin ---->css压缩
  3、gulp-imagemin----->图片压缩
  4、gulp-sass ----->sass编译
  5、gulp-load-plugins ---->自动加载插件模块
  6、gulp-uglify--->压缩js
  7、browser-sync --->开启服务，浏览器同步刷新
  8、gulp-imagemin -->图片压缩
  9、gulp-autoprefixer -->自动添加前缀
  10、gulp-htmlmin--->压缩html

  包初始化
  npm init:创建一个package.json

  gulp需要安装的模块

  01 gulp-concat 合并文件：cnpm install gulp-concat --save-dev
  把所有的js文件合并成一个js文件


*/

// jsonp是利用script标签可以跨域访问资源的特性，在页面内动态插入一个script标签，向服务器发起数据的跨域请求。服务器收到请求后，将数据放在一个指定名字的回调函数中传回

// 功能检测 “touchstart” in document

// gulp要在站点根目录里

var gulp = require("gulp");
// 合并
var concat = require("gulp-concat");
// html压缩
var htmlmin = require("gulp-htmlmin");
// js压缩
var uglify = require("gulp-uglify");
// 自动添加前缀
var autoprefixer = require("gulp-autoprefixer");
// css压缩
var cssmin = require("gulp-cssmin");
// 清除文件夹/文件
var clean = require("gulp-clean");
// 浏览器同步
var browserSync = require("browser-sync").create();

// 构建任务
gulp.task("js",function(){
  // 在命令行里操作
  
  // 指定要处理文件的路径
  // 找到src下的所有js文件
  gulp.src("./src/js/*.js")
  .pipe(gulp.dest("./dist/"))
  .pipe(browserSync.reload({stream:true}))

});

// 合并js文件
gulp.task("jsConcat",function(){
  // 在命令行里操作
  
  // 指定要处理文件的路径
  // 找到src下的所有js文件，链式操作
  gulp.src("./src/js/*.js")
  // 合并后的js名字
  .pipe(concat("all.js"))
  // 写入到dist文件夹下
  .pipe(gulp.dest("dist/js"))
  .pipe(browserSync.reload({stream:true}))

});

// 把所有的html写入到dist文件夹里
gulp.task("html",function(){
  // 读取src文件夹下所有文件夹下面的所有.html
  gulp.src("src/**/*.html")
  // 压缩
  .pipe(htmlmin({//collapseWhitespace:true,
    }))
  .pipe(gulp.dest("dist/"))
  .pipe(browserSync.reload({stream:true}))

});

// css合并 压缩
gulp.task("css",function(){
  // 读取对应的css文件
  gulp.src("src/css/*.css")
  // css自动添加前缀
  .pipe(autoprefixer())
  // 合并css并命名为all.css
  .pipe(concat("all.css"))
  // css进行压缩
  .pipe(cssmin())
  // 输出到dist文件夹下
  .pipe(gulp.dest("dist/css"))
  .pipe(browserSync.reload({stream:true}))

});

// css加私有前缀
gulp.task("autoCss",function(){
  // 指定对应文件夹下的多个css文件
  gulp.src("src/css/{auto.css,login.css}")
  // 添加私有前缀
  .pipe(autoprefixer({
    browsers:['last 2 versions','ie>8'], //浏览器版本
    cascade:true //美化前缀，默认为true
  }))
  // 输出到dist文件夹下
  .pipe(gulp.dest("dist/css"))
  .pipe(browserSync.reload({stream:true}))

});

// js压缩
gulp.task("jsUglify",function(){
  // 读取对应文件
  gulp.src("src/js/{iscroll.Veb.js,zepto.min.js}")
  // 合并后命名为 all.js
  .pipe(concat("uglify.js"))
  // 执行压缩
  .pipe(uglify())
  // 输出到dist文件夹
  .pipe(gulp.dest("dist/js"))
  .pipe(browserSync.reload({stream:true}))

});

// 清除文件夹
gulp.task("clean",function(){
  // 读取dist文件夹
  gulp.src("dist/")
  // 清除该文件夹
  .pipe(clean())
});

// js合并压缩
gulp.task("php",function(){
  // 读取对应js文件
  gulp.src("src/php/{a.js,b.js}")
  // 合并后命名为c.js
  .pipe(concat("c.js"))
  // 进行压缩
  .pipe(uglify())
  // 输出到指定文件夹
  .pipe(gulp.dest("dist/php"))
  .pipe(browserSync.reload({stream:true}))

});

// 执行全部任务
// default 是默认的，在命令行里直接输入 gulp 就行
gulp.task("default",["jsConcat","html","css","autoCss","php","jsUglify"],function(){
  // 如果当前文件夹下有代码变动，重新执行该代码
  // 动态监听
  gulp.watch("src/js/*.js",["jsConcat"]);
  gulp.watch("src/**/*.html",["html"]);
  gulp.watch("src/css/*.css",["css"]);
  gulp.watch("src/css/{auto.css,login.css}",["autoCss"]);
  gulp.watch("src/js/{iscroll.Veb.js,zepto.min.js}",["jsUglify"]);
  gulp.watch("src/php/{a.js,b.js}",["php"]);
  console.log("执行全部任务");
});

// browserSync 浏览器同步
gulp.task("browser",["jsConcat","html","css","autoCss","php","jsUglify"],function(){
  // 热刷新
  browserSync.init({
    port:3000,
    server:{
      baseDir:["dist"]
    }
  })
  // 如果当前文件夹下有代码变动，重新执行该代码
  // 动态监听
  gulp.watch("src/js/*.js",["jsConcat"]);
  gulp.watch("src/**/*.html",["html"]);
  gulp.watch("src/css/*.css",["css"]);
  gulp.watch("src/css/{auto.css,login.css}",["autoCss"]);
  gulp.watch("src/js/{iscroll.Veb.js,zepto.min.js}",["jsUglify"]);
  gulp.watch("src/php/{a.js,b.js}",["php"]);
  console.log("执行全部任务");
});