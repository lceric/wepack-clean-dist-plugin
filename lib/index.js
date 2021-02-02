const fs = require('fs');
const { promisify } = require('util');

const rmdir = promisify(fs.rmdir);

class WebpackCleanDistPlugin {
  constructor(opts) {
    this.options = opts;
  }
  apply(compiler) {
    compiler.hooks.beforeRun.tap('WebpackCleanDistPlugin', compiler => {
      const { outputPath } = compiler
      const isExist = fs.existsSync(outputPath)
      if (!isExist) return
      rmdir(outputPath, {
        recursive: true,
      });
    });
  }
}

module.exports = WebpackCleanDistPlugin