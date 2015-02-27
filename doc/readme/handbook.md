## Plugin Handbook

This section provides information on writing and loading plugins.

Plugins are functions invoked in the scope of the class prototype that typically decorate the prototype object (using `this`) but may also add static methods or load other plugins.

### Creating Plugins

Creating plugins is designed to be simple and easy to use.

#### Instance Plugins

To create an instance plugin just assign a function to `this` within the plugin function:

```javascript
module.exports = function() {
  // decorate Air.prototype
  this.method = function() {
    // implement method functionality

    // return this to allow chaining on this function
    return this;
  }
}
```

You can then invoke the `method` function on `Air` instances:

```javascript
var $ = require('air');
$('div').method();
```

Most of the default plugins are instance plugins, take a look at [lib](/lib) for examples.

#### Static Plugins

To decorate the main `air` function with static functions assign to `this.air`.

```javascript
module.exports = function() {
  // decorate main function
  this.air.method = function() {
    // implement method functionality
  }
}
```

You can then invoke the `method` function on `air`:

```javascript
var $ = require('air');
$.method();
```

See the [create](/lib/create.js) plugin for an example static plugin.

#### Composite Plugins

You can depend upon other plugins by calling `this.plugin` within the plugin function. This allows plugins to composite other plugins in order to resolve plugin dependencies or provide plugin groups (related plugins).

```javascript
module.exports = function() {
  this.plugin([require('alt-plugin')]);
}
```

See the [attributes](/lib/attributes.js) plugin group for an example composite plugin.

By convention plugins are singular and plugin groups are plural.

### Loading Plugins

To load plugin(s) call the `plugin` function passing an array of plugin functions:

```javascript
// alias to $ for brevity
var $ = require('air');
$.plugin([require('attr')]);
```

It is possible to pass a configuration object at runtime to a plugin by using an object with a `plugin` function and a `conf` object:

```javascript
var $ = require('air');
var plugins = [
  {
    plugin: function(conf) {
      // do something with the runtime configuration
      // initialize the plugin
    },
    conf: {foo: 'bar'}
  }
];
$.plugin(plugins);
```
