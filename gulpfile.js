//引入gulp模块
var gulp = require("gulp");
//引入插件   
var concat = require("gulp-concat");//提供参数
//var sass = require("gulp-sass");//没有按照成功不要引入
//var uglify = require("gulp-uglify");
var rename = require("gulp-rename");//提供参数
//var cssmin = require("gulp-cssmin");
var imgmin = require("gulp-imagemin"); 
//
////task() 布置任务
////第一个参数 ： 任务名称
////第二个参数 ：  依赖的其他任务(数组)  省略
////第三个参数:  回调函数
//
////布置一个default任务
//gulp.task("default",["study","sleep"],function(){
//	console.log("default任务执行");
//})
//
////运行 gulp 命令 默认执行 default 任务
//
////布置一个 study 任务 
//gulp.task("study",function(){
//	console.log("study任务执行");
//})
//
////执行study任务 有两种方案
////一、gulp study 只执行study任务
////二、通过gulp 执行default 在default任务上添加一个 依赖执行的任务
//
////布置 sleep任务
//gulp.task("sleep",["study"],function(){
//	console.log("sleep任务执行");
//})
//
//
////src()  获取源文件路径
////参数可以是一个字符 或 一个数组
////dest() 获取目标文件的路径（可以自动创建目标文件所在的目录）
////参数是一个路径
////pipe()  管道方法  表示 下一步
//
////布置任务  将src目录下的index.html文件 复制到 dest目录下
//gulp.task("copyHtml",function(){
//	return gulp.src("src/index.html")
//			   .pipe( gulp.dest("dest") );
//})
//
////布置任务  将lib目录下的所有js文件和script目录下的所有js文件 复制到 dest下的js目录下
//gulp.task("copyJs",function(){
//	return gulp.src(["lib/*.js","script/*.js"])
//			   .pipe( gulp.dest( "dest/js" ) );
//})
//
////watch方法  监听任务
////第一个参数 ： 要监听的源文件的路径
////第二个参数： 数组  数组中是要监听的任务
////布置任务  自动监听src下面的index.html文件内容的变化  如果该文件内容发生变化
////  自动将文件复制到 dest目录下
//
//gulp.task("watchHtml",function(){
//	return gulp.watch("src/index.html",["copyHtml"]);
//})
//
//
////布置任务   将css目录下的 style.scss 转成 style.css文件  文件生成到 css目录下
//gulp.task( "tsass" ,function(){
//	return gulp.src( "css/style.scss" )
//			   .pipe( sass() )
//			   .pipe( gulp.dest("css") );
//} )
//
////布置任务 ： 将lib下的js文件合并成一个新的 all.js文件
//gulp.task("tconcat",function(){
//	return gulp.src("lib/*.js")
//			   .pipe( concat("all.js") )
//			   .pipe( gulp.dest( "lib" ) );
//})
//
////布置任务 ： 将lib下的js文件合并成一个新的 all.js文件  并将该文件进行压缩
//// 并重命名 all.min.js
//gulp.task("tuglify",function(){
//	return gulp.src("lib/*.js")
//			   .pipe( concat("all.js") )
//			   .pipe( uglify() )
//			   .pipe( rename("all.min.js") )
//			   .pipe( gulp.dest( "lib" ) );
//})
//
////布置任务 : 压缩css目录下的style.css
//gulp.task( "tcssmin",function(){
//	return gulp.src("css/style.css")
//			   .pipe( cssmin() )
//			   .pipe( rename("style.min.css") )
//			   .pipe( gulp.dest("css") );
//} )

//布置任务 ： 将images中的图片文件压缩 生成到 img目录下
gulp.task( "timgmin",function(){
	return gulp.src("img/*")
			   .pipe( imgmin() )
			   .pipe( gulp.dest("img") )
} )
