var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("sass",function(){

  return gulp.src("src/sass/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("src/css"))
  .pipe(reload({stream:true}));

});

gulp.task("html",function(){
  gulp.watch("src/*.html",["html"]);
  gulp.src("src/*.html").pipe(gulp.dest("dist"))
  .pipe(browserSync.reload({stream:true}))
});

// 监视 Sass 文件的改动，如果发生变更，运行 'sass' 任务，并且重载文件
gulp.task("sassAuto",["sass","html"],function(){
  browserSync({
    server:{
      baseDir:"src"
    }
  });
  gulp.watch("src/sass/*.scss",["sass"]);
  gulp.watch("src/*.html",["html"]);
});