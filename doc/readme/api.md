## API

The main function `air` wraps a set of elements in a class that may be decorated by plugins.

### Core

Core functionality is the main method, the class function and the pre-defined properties and methods on the class, see [air.js](/lib/air.js).

#### air(selector, [context])

Returns an `Air` instance.

#### air.Air

Reference to the `Air` constructor.

#### new Air(selector, [context])

Class constructor.

Accepts a selector `String`, `Element`, `NodeList`, `Air` instance or array of elements.

The `context` argument is only applicable when a selector `String` argument is used and should reference the parent `Element` context for `querySelectorAll`.

When an existing `Air` instance is passed the underlying array is copied but the elements are not cloned.

```javascript
var $ = require('air');
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

##### air(selector, [context])

Alias to the main `air` function, allows instance methods to wrap elements using `this.air()`.

##### plugin(list)

Alias to the `plugin` function, allows instance methods to load plugins via `this.plugin()`.
