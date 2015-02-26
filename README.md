Table of Contents
=================

* [Air](#air)
  * [Design](#design)
  * [Usage](#usage)
  * [Install](#install)
  * [API](#api)
    * [Core](#core)
    * [air(selector, [context])](#airselector-context)
    * [new Air(selector, [context])](#new-airselector-context)
      * [.dom](#dom)
      * [.length](#length)
      * [get([index])](#getindex)
      * [each(iterator)](#eachiterator)
  * [Compatibility](#compatibility)
    * [Array Access](#array-access)
    * [HTML Parsing](#html-parsing)
    * [AJAX](#ajax)
    * [Data](#data)
    * [XML](#xml)
  * [Developer](#developer)
    * [Test](#test)
    * [Cover](#cover)
    * [Lint](#lint)
    * [Clean](#clean)
    * [Dist](#dist)
    * [Spec](#spec)
    * [Instrument](#instrument)
    * [Readme](#readme)
  * [Roadmap](#roadmap)
  * [License](#license)

Air
===

Lightweight, modular DOM library.

Browser targets are relatively *modern browsers* from IE9+, Chrome, Firefox, Safari and modern versions of Opera (post [blink](http://www.chromium.org/blink) integration).

## Design

Whilst the API is similar to [jquery](http://jquery.com) some notable design decisions:

* Plugin architecture.
* No global variables.
* Do not support HTML parsing.

To get a feel for how lightweight `air` is see [air.js](https://github.com/socialally/air/blob/master/lib/air.js), the core of the system is less than 100 lines of code (with comments). All other files in [lib](https://github.com/socialally/air/blob/master/lib) are plugins that should be loaded depending upon your application requirements.

## Usage

Designed to work with [browserify](http://browserify.org) by default, assuming you have configured the [browserify](http://browserify.org) `paths` option correctly:

```javascript
var $ = require('air');
$.plugin([
  require('event')
])
```

## Install

```
npm i air
```

Note that currently we do not own the `air` package and we are attempting to resolve this. Therefore this module is currently published to a *private* registry. This project is open-source and if we resolve the package name dispute will be published to the public registry as `air` otherwise an alternative package name will be used.

In the meantime you can depend upon the git repository:

```
"air": "socialally/air"
```

## API

The main function `air` wraps a set of elements in a class that may be decorated by plugins.

Example code assumes that `air` has been aliased to `$`.

### Core

Core functionality is the main method, the class function and the pre-defined properties and methods on the class, see [air.js](https://github.com/socialally/air/blob/master/lib/air.js).

### air(selector, [context])

Returns an `Air` instance.

### new Air(selector, [context])

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

#### .dom

The underlying array of elements.

#### .length

The number of encapsulated elements.

#### get([index])

Get the element at the specified index, if no arguments are passed the `dom` array is returned.

#### each(iterator)

Iterate the underlying elements, alias for `dom.forEach`.

## Compatibility

Some features available in [jquery](http://jquery.com) that there are no plans to implement.

### Array Access

Accessing the underlying DOM elements using array bracket notation `[]` is not available, if you wish to access the encapsulated elements use the [core methods](#core).

### HTML Parsing

Whilst [jquery](http://jquery.com) allows HTML parsing (eg: `$('<p></p>')`) this library does not support it and there are no plans to implement this functionality, the rationale is:

* Confuses the semantics of `$`.
* You can create elements easily by chaining function calls.
* For complex requirements a template library is a better option.
* Implementing complex expressions to prevent [xss](http://en.wikipedia.org/wiki/Cross-site_scripting) attacks is not a good idea, best to avoid potentially tainted input wherever possible.

Note that recent [jquery](http://jquery.com) versions now recommend `$.parseHTML` rather than passing markup to `$`. 

### AJAX

This is deemed to be irrelevant to DOM manipulation and is best left to one of the many capable libraries available.

### Data

The `data` plugin allows manipulating the `data-` attributes of an element but does not store any data on the element itself. If you wish to maintain data as part of your application it would be best resolved using another pattern (eg: [storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)).

If you really need to assign arbitrary data to an element you can always do so by directly setting properties on the element.

### XML

Designed to work with `HTML` documents the behaviour when modifying `XML` documents is undefined.

## Developer

Developer workflow is via [gulp](http://gulpjs.com) but should be executed as `npm` scripts to enable shell execution where necessary.

### Test

Run the headless test suite using [phantomjs](http://phantomjs.org):

```
npm test
```

To run the tests in a browser context open [test/index.html](https://github.com/socialally/air/blob/master/test/index.html).

### Cover

Run the test suite and generate code coverage:

```
npm run cover
```

### Lint

Run the source tree through [eslint](http://eslint.org):

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Dist

Create distribution builds in [dist](https://github.com/socialally/air/blob/master/dist):

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

Generate the project readme file (requires [mdp](https://github.com/freeformsystems/mdp)):

```
npm run readme
```

## Roadmap

1. Get the core plugins stable and well tested with comprehensive code coverage.
2. Build a command line interface to generate custom plugin builds for various module standards including [umd](https://github.com/umdjs/umd), [requirejs](http://requirejs.org) and [systemjs](https://github.com/systemjs/systemjs).

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](https://github.com/socialally/air/blob/master/LICENSE) if you feel inclined.

Generated by [mdp(1)](https://github.com/freeformsystems/mdp).

[node]: http://nodejs.org
[npm]: http://www.npmjs.org
[jquery]: http://jquery.com
[gulp]: http://gulpjs.com
[phantomjs]: http://phantomjs.org
[browserify]: http://browserify.org
[eslint]: http://eslint.org
[blink]: http://www.chromium.org/blink
[requirejs]: http://requirejs.org
[umd]: https://github.com/umdjs/umd
[systemjs]: https://github.com/systemjs/systemjs
[xss]: http://en.wikipedia.org/wiki/Cross-site_scripting
[storage]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
[mdp]: https://github.com/freeformsystems/mdp
