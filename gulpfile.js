var gulp = require("gulp");
// css压缩
var cssmin = require("gulp-cssmin");
// 加前缀
var autoprefixer = require("gulp-autoprefixer");
// 自动刷新
var browserSync = require("browser-sync").create();
// js压缩
var uglify = require("gulp-uglify");
// html压缩
var htmlmin = require("gulp-minify-html");
// sass编译css
var sass = require("gulp-sass");

gulp.task("js",function(){
  gulp.watch("js/index.js",["js"]);
  gulp.src("js/index.js").pipe(gulp.dest("dist/js"))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task("css",function(){
  gulp.watch("src/css/*.css",["css"]);
  gulp.src("src/css/*.css").pipe(gulp.dest("dist/css"))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task("html",function(){
  gulp.watch("src/*.html",["html"]);
  gulp.src("src/*.html").pipe(gulp.dest("dist"))
  .pipe(browserSync.reload({stream:true}))
});

// css压缩
gulp.task("cssmin",function(){
  gulp.watch("src/css/*.css",["cssmin"]);
  gulp.src("src/css/*.css")
  .pipe(cssmin())
  .pipe(gulp.dest("dist/cssmin"))
  .pipe(browserSync.reload({stream:true}))
});

// js压缩
gulp.task("uglify",function(){
  gulp.watch("src/js/*.js",["uglify"]);
  gulp.src("src/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("dist/jsuglify"))
  .pipe(browserSync.reload({stream:true}))
});

// html压缩
gulp.task("htmlmin",function(){
  gulp.watch("src/*.html",["htmlmin"]);
  gulp.src("src/*.html")
  .pipe(htmlmin())
  .pipe(gulp.dest("dist/htmlmin"))
  .pipe(browserSync.reload({stream:true}))
});

// css加私有前缀
gulp.task("autoprefixer",function(){
  gulp.watch("src/css/*.css",["autoprefixer"])
  gulp.src("src/css/*.css")
  .pipe(autoprefixer({
    browsers: ['last 3 versions','Android >= 4.0','>5%'],
      cascade: true, //是否美化属性值 默认：true 
      remove:true //是否去掉不必要的前缀 默认：true 
  }))
  .pipe(gulp.dest("dist/autocss"))
  .pipe(browserSync.reload({stream:true}))
});

// sass编译css
gulp.task("sass",function(){
  gulp.watch("src/sass/*.scss",["sass"]);
  gulp.src("src/sass/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(browserSync.reload({stream:true}))
})

// 自动刷新
gulp.task("browserSync",["js","css","html","autoprefixer","sass"],function(){
  browserSync.init({
    port:3000, // 端口号
    server:{
      baseDir:["src"], // 默认路径
      index:"auto.html" // 默认打开文件
    }
  })

  // 如果当前文件夹下有代码变动，重新执行该代码
  gulp.watch("js/*.js",["js"]);
  gulp.watch("css/*.css",["css"]);
  gulp.watch("src/*.html",["html"]);
  gulp.watch("src/css/*.css",["autoprefixer"]);
  gulp.watch("src/sass/*.scss",["sass"]);
  console.log("ok");

});