## Usage

Designed to work with [browserify][] by default, assuming you have configured the [browserify][] `paths` option correctly for `node_modules/air/lib`:

```javascript
var $ = require('air');
$.plugin([
  require('air/event')
])
```

Note that the plugins are namespaced to prevent potential collisions when an application is using multiple plugin-enabled components.
