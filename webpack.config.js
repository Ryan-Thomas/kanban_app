const path = require('path');

const PATHS = {
  app: paths.join('__dirname', 'app'),
  build: paths.join('__dirname', 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries. We will be using the latter
  // form given it's more convenient with more complex operations
  entry: {
    app: 'PATHS.app'
  },
  output: {
    path: 'PATHS.build',
    filename: 'bundle.js'
  }
};
