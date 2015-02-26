## API

The main function (`air`) wraps a set of elements in a class that may be decorated by plugins.

Example code assumes that `air` has been aliased to `$`.

### Core

Core functionality is the main method, the class function and the pre-defined properties and methods on the class.

### air(selector, [context])

Returns an `Air` instance.

### new Air(selector, [context])

Class constructor.

Accepts a selector `String`, `Element`, `NodeList`, `Air` instance or array of elements.

The `context` argument is only applicable when a selector `String` argument is used and should reference the parent `Element` context for `querySelectorAll`.

When an existing `Air` instance is passed the underlying array is copied but the elements are not cloned.

```
$('body');                                  // String (selector)
$(document.querySelector('body'));          // Element
$(document.getElementById('id'));           // Element
$(document.querySelectorAll('div'));        // NodeList
$([document.getElementById('div')]);        // Array
$($('body'));                               // Air
```

#### .dom

The underlying array of elements.

#### .length

The number of encapsulated elements.

#### get([index])

Get the element at the specified index, if no arguments are passed the `dom` array is returned.

#### each(iterator)

Iterate the underlying elements, alias for `dom.forEach`.
