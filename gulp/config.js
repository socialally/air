var config = {
  clean: ['./instrument', './coverage', './test/spec.*'],
  spec: {
    main: './test/spec/index.js',
    options: {
      paths: ['./lib', './test/fixture'],
      map: './',
      dest: './test',
      source: 'spec.js'
    }
  },
  cover: {
    file: './coverage/coverage.json',
    main: './test/spec/index.js',
    options: {
      paths: ['./instrument', './test/fixture'],
      map: './',
      dest: './test',
      source: 'spec.js'
    }
  },
}

module.exports = config;
