var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');

// 定义任务 , 这个任务名为 less
	gulp.task('less',function(){
		// 回调写具体逻辑
		// 借助gulp.src 来指定less的文件位置 , * 指的是全部Less文件
		gulp.src('./*.less')

		// 借助于gulp插件实现less 转 css 操作
		// 安装less插件 npm install gulp-less  (本地安装默认在node_modules)

			// 把less 转换
			.pipe(less())
			// 通过gulp.dest进行存储
			.pipe(gulp.dest('./'));
	});
