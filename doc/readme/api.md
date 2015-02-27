## API

The main function `air` wraps a set of elements in a class that may be decorated by plugins.

Example code assumes that `air` has been aliased to `$`.

### Core

Core functionality is the main method, the class function and the pre-defined properties and methods on the class, see [air.js](/lib/air.js).

#### air(selector, [context])

Returns an `Air` instance.

#### new Air(selector, [context])

Class constructor.

Accepts a selector `String`, `Element`, `NodeList`, `Air` instance or array of elements.

The `context` argument is only applicable when a selector `String` argument is used and should reference the parent `Element` context for `querySelectorAll`.

When an existing `Air` instance is passed the underlying array is copied but the elements are not cloned.

```javascript
$('body');                                  // String (selector)
$(document.querySelector('body'));          // Element
$(document.getElementById('id'));           // Element
$(document.querySelectorAll('div'));        // NodeList
$([document.getElementById('id')]);         // Array
$($('body'));                               // Air
```

##### .dom

The underlying array of elements.

##### .length

The number of encapsulated elements.

##### get([index])

Get the element at the specified index, if no arguments are passed the `dom` array is returned.

##### each(iterator)

Iterate the underlying elements, alias for `dom.forEach`.

### Plugins

Core plugins that may be loaded on demand, syntax examples assume that `air` has been aliased to `$`.

Everything except the [core methods](#core) are implemented as plugins so there are many examples in [lib](/lib).

#### append

Insert content, specified by the parameter, to the end of each element in the set of matched elements.

```javascript
$(selector, [context]).append(content);
```

* File: [append.js](/lib/append.js)
* Dependencies: none

#### attr

Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

```javascript
$(selector, [context]).attr(name);
$(selector, [context]).attr(name, value);
$(selector, [context]).attr(attributes);
```

* File: [attr.js](/lib/attr.js)
* Dependencies: none

#### children

Get the children of each element in the set of matched elements.

```javascript
$(selector, [context]).children();
```

* File: [children.js](/lib/children.js)
* Dependencies: none

### Plugin Groups

Plugin groups provide a convenient way to load related plugins.

#### Attributes

Element attribute plugins.

* File: [attributes.js](/lib/attributes.js)
* Plugins: [attr](#attr), [class](#class), [data](#data)
