var path = require('path');

var config = {
  clean: [
    './instrument',
    './coverage',
    './test/spec.*',
    './dist/*.js',
    './dist/*.js.map'
  ],
  spec: {
    main: './test/spec/index.js',
    paths: ['./lib', './test/fixture', './lib/air'],
    map: './',
    dest: './test',
    source: 'spec.js'
  },
  cover: {
    file: './coverage/coverage.json',
    main: './test/spec/index.js',
    paths: ['./instrument', './test/fixture', './instrument/air'],
    map: './',
    dest: './test',
    source: 'spec.js'
  },
  dist: {
    global: {
      main: './gulp/build/global.js',
      paths: ['./lib', './lib/air'],
      map: false,
      dest: './dist',
      source: 'air.global.js'
    }
  },
  lint: {
    src: ['./lib/**/*.js'],
    rules: {},
    envs: ['browser', 'node']
  }
}

try {
  config.lint.rules = require(path.join(process.env.HOME, '.salint.js'));
}catch(e){}

module.exports = config;
