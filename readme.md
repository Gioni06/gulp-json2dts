# gulp-json2dts [![Build Status](https://travis-ci.org/Gioni06/gulp-json2dts.svg?branch=master)](https://travis-ci.org/Gioni06/gulp-json2dts)

# gulp-json2dts

## Description

Converts json files to TypeScript interfaces.
This plugin is usefull when you have a `config.json` file and want to use it within your TypeScript code.

## Install

```
$ npm install --save-dev gulp-json2dts
```


## Usage

```js
const gulp = require('gulp');
const json2dts = require('gulp-json2dts');

gulp.task('default', () => {
	gulp.src('src/file.json')
		.pipe(json2dts())
		.pipe(gulp.dest('dist'))
);
```

## Contribution

Contributions would be very nice :)
 
