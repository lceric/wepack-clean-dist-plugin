const fs = require('fs');
const { promisify } = require('util');

const rmdir = promisify(fs.rmdir);

class WebpackCleanDistPlugin {
  constructor(opts) {
    this.options = opts;
  }
  apply(compiler) {
    compiler.hooks.beforeRun.tap('WebpackCleanDistPlugin', compiler => {
      rmdir(compiler.outputPath, {
        recursive: true,
      });
    });
  }
}

module.exports = WebpackCleanDistPlugin