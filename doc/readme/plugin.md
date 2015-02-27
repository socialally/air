## Plugins

Default plugins that may be loaded on demand, syntax examples assume that `air` has been aliased to `$`.

Everything except the [core methods](#core) are implemented as plugins so there are many examples in [lib](/lib).

### append

Insert content, specified by the parameter, to the end of each element in the set of matched elements.

```javascript
$(selector, [context]).append(content);
```

* File: [append.js](/lib/append.js)
* Dependencies: none

### attr

Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

```javascript
$(selector, [context]).attr(name);
$(selector, [context]).attr(name, value);
$(selector, [context]).attr(attributes);
```

* File: [attr.js](/lib/attr.js)
* Dependencies: none

### children

Get the children of each element in the set of matched elements.

```javascript
$(selector, [context]).children();
```

* File: [children.js](/lib/children.js)
* Dependencies: none

## Plugin Groups

Plugin groups provide a convenient way to load related plugins.

### Attributes

Element attribute plugins.

* File: [attributes.js](/lib/attributes.js)
* Plugins: [attr](#attr), [class](#class), [data](#data)
