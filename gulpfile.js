var gulp = require('gulp')
  , fs = require('fs')
  , reactTools = require('react-tools');

var transform = function (srcFile, destFile, cb) {
  console.log('Reading %s...', srcFile);
  fs.readFile(srcFile, { encoding: 'utf8' }, function (readErr, data) {
    if (readErr) {
      cb(readErr);
    }
    else {
      console.log('Writing %s', destFile)
      fs.writeFile(destFile, reactTools.transform(data), function (writeErr) {
        if (writeErr) {
          cb(writeErr);
        } else {
          cb();
        }
      });
    }
  });
}

gulp.task('jsx', function (cb) {
  fs.mkdir('./lib', function (err) {
    transform('index.jsx', './lib/index.js', function (err) {
      cb(err);
    });
  });
});

gulp.task('default', function () {
  gulp.start('jsx');
});