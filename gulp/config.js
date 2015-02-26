var config = {
  clean: ['./instrument', './coverage', './test/spec.*'],
  spec: {
    main: './test/spec/index.js',
    options: {
      paths: ['./lib'],
      map: './',
      dest: './test',
      source: 'spec.js'
    }
  },
  cover: {
    main: './test/spec/index.js',
    options: {
      paths: ['./instrument'],
      map: './',
      dest: './test',
      source: 'spec.js'
    }
  },
}

module.exports = config;
