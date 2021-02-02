
<h1 align="center">webpack-clean-dist-plugin</h1>

<div align="center">
  <a href="https://npmjs.org/package/webpack-clean-dist-plugin">
    <img src="https://img.shields.io/npm/v/webpack-clean-dist-plugin.svg" alt="version" />
  </a>
  <a href="https://npmjs.org/package/webpack-clean-dist-plugin">
    <img src="https://img.shields.io/npm/dm/webpack-clean-dist-plugin.svg" alt="downloads" />
  </a>
</div>

<div align="center">A simple plugin to clean webpack dist dir.</div>


## Installation

```
npm install webpack-clean-dist-plugin -D
```

> The dist path is webpack compiler outputPath.


## Usage

```js
const WebpackCleanDistPlugin = require('webpack-clean-dist-plugin');

// webpack.config.js
module.exports = {
  plugins: [
    new WebpackCleanDistPlugin()
  ]
}
```
