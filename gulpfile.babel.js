'use strict';

import path from 'path';
import del from 'del';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

const $ = plugins();

const SRC = 'src';
let DEST = 'lib';

const PATHS = {
  src: path.join(SRC, '**/*.js')
};

// returns a function that transpiles es6 code to js
const babelTask = (obj) =>
  () =>
    gulp.src(obj.src)
      .pipe($.changed(obj.dest))
      .pipe($.babel())
      .pipe(gulp.dest(obj.dest))
      .pipe($.print(fp => `babel'd: ${fp}`));

// transpile es6
gulp.task('babel', babelTask({
  src: PATHS.src,
  dest: DEST
}));

gulp.task('build', ['clean', 'babel']);

// cleanup directory
gulp.task('clean', () => del.sync([DEST]));
