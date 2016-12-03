import * as fs from 'fs';
import path from 'path';
import test from 'ava';
import gulpUtil from 'gulp-util';
import fn from './';

test.cb('It should convert json schema files to typescript interfaces', t => {
	var input = '';
	var output = '';

	fs.readFile(path.join(__dirname, './fixtures/example.json'), 'utf8', function (err, data) {
		if (err) {
			t.fail();
		}
		input = data;

		fs.readFile(path.join(__dirname, './fixtures/example.d.ts'), 'utf8', function (err, data) {
			if (err) {
				t.fail();
			}
			output = data;
			runTest(input, output);
		});
	});

	function runTest(i, o) {
		const stream = fn();
		stream.once('data', file => {
			t.is(file.contents.toString(), o);
			t.end();
		});

		stream.write(new gulpUtil.File({
			base: path.join(__dirname, './fixtures/'),
			cwd: __dirname,
			path: path.join(__dirname, './fixtures/example.json'),
			contents: new Buffer(i)
		}));

		stream.end();
	}
});
