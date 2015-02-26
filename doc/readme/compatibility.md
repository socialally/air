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

### Data

The `data` plugin allows manipulating the `data-` attributes of an element but does not store any data on the element itself. If you wish to maintain data as part of your application it would be best resolved using another pattern (eg: [storage][]).

If you really need to assign arbitrary data to an element you can always do so by directly setting properties on the element.

### XML

Designed to work with `HTML` documents the behaviour when modifying `XML` documents is undefined.
