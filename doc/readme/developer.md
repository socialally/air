## Developer

Developer workflow is via [gulp][] but should be executed as `npm` scripts to enable shell execution where necessary.

### Test

Run the headless test suite using [phantomjs][]:

```
npm test
```

To run the tests in a browser context open [test/index.html](/test/index.html).

### Cover

Run the test suite and generate code coverage:

```
npm run cover
```

### Lint

Run the source tree through [jshint][] and [jscs][]:

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Dist

Create distribution builds in [dist](/dist):

```
npm run dist
```

### Spec

Compile the test specifications:

```
npm run spec
```

### Instrument

Generate instrumented code from `lib` in `instrument`:

```
npm run instrument
```

### Readme

Generate the project readme file (requires [mdp][mdp]):

```
npm run readme
```
