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
  dist: {
    main: './bundle.js',
    options: {
      paths: ['./lib'],
      map: false,
      dest: './dist',
      source: 'air.js'
    }
  },
  lint: {
    src: ['./lib/**/*.js'],
    rules: {
      'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
      'comma-style': [2, 'last'],
      'max-len': [1, 80, 4],
      'no-extra-semi': 0,
      'no-multiple-empty-lines': [2, {'max': 1}],
      'no-self-compare':  2,
      'no-underscore-dangle': 0,
      'quotes': [1, 'single'],
      'semi': 0,
      'space-after-keywords': ['never'],
      'space-in-brackets': [2, 'never'],
      'space-in-parens': [2, 'never'],
      'spaced-line-comment': ['never'],
      'strict': 0
    },
    envs: ['browser', 'node']
  }
}

module.exports = config;
