const path = require('path');
const babel = require('rollup-plugin-babel');
const pkg = require('./package.json');

const extensions = ['.js', '.ts'];

const resolve = function(...args) {
  return path.resolve(__dirname, ...args);
};

module.exports = {
  input: resolve('./src/index.ts'),
  output: {
    format: 'esm',
    file: resolve(pkg.module),
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
};
