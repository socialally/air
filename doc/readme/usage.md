## Usage

Designed to work with [browserify][] by default, assuming you have configured the [browserify][] `paths` option correctly:

```javascript
var $ = require('air');
$.plugin([
  require('event')
])
```
