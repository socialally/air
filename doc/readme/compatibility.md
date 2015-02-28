## Compatibility

Some features available in [jquery][] that there are no plans to implement.

### Array Access

Accessing the underlying DOM elements using array bracket notation `[]` is not available, if you wish to access the encapsulated elements use the [core methods](#core).

### HTML Parsing

Whilst [jquery][] allows HTML parsing (eg: `$('<p></p>')`) this library does not support it and there are no plans to implement this functionality, the rationale is:

* Confuses the semantics of `$`.
* You can create elements easily by chaining function calls.
* For complex requirements a template library is a better option.
* Implementing complex expressions to prevent [xss][] attacks is not a good idea, best to avoid potentially tainted input wherever possible.

Note that recent [jquery][] versions now recommend `$.parseHTML` rather than passing markup to `$`. 

### AJAX

This is deemed to be irrelevant to DOM manipulation and is best left to one of the many capable libraries available.

### Element Data

The `data` plugin allows manipulating the `data-` attributes of an element but does not store any data on the element itself. If you wish to maintain data as part of your application it would be best resolved using another pattern (eg: [storage][]).

If you really need to assign arbitrary data to an element you can always do so by directly setting properties on the element.

### XML

Designed to work with `HTML` documents the behaviour when modifying `XML` documents is undefined.

### Selector Extensions

The [jquery][] library extends CSS selectors with pseudo-selectors such as `:checked`, we believe this is unnecessary as all selector extension functionality can be achieved using other means.

### Redundancy

We aim to provide a single way to perform a task, the [jquery][] library often provides multiple ways to achieve the same thing, for example:

* `$.get()` and `$.toArray()`
* `$.append()` and `$.appendTo()`
* `$.prepend()` and `$.prependTo()`

The `air` library will usually prefer the shorter and most common variant and not supply the alternatives; using the above examples the equivalent functions are `$.get()`, `$.append()` and `$.prepend()`.

### Dimension

Whilst the [jquery][] dimension methods (`width()`, `innerWidth()` etc.) allow setting element dimensions we prefer (for the sake of simplicity) to make these read-only as you can already set element dimensions using the `css` plugin. It is possible that this may change in the future.
