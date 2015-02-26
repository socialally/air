## Design

Whilst the API is similar to [jquery][] some notable design decisions:

* Plugin architecture
* No global variables
* Stay focused, see [compatibility](#compatibility)

To get a feel for how lightweight `air` is see [air.js](/lib/air.js), the core of the system is less than 100 lines of code (with comments). All other files in [lib](/lib) are plugins that should be loaded depending upon your application requirements.
