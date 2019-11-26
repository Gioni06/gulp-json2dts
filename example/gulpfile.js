var gulp = require('gulp');
var json2dts = require('../index');

gulp.task('default', function() {
	gulp
		.src('src/example.json')
		.pipe(json2dts({ bannerComment: false }))
		.pipe(gulp.dest('dist'));
});
