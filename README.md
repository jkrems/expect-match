# `expect-match`

A throwing variant of `str.match`.
If the string matches the pattern, it acts just like the regular `.match`.
Otherwise it turns this:

```js
const [, a] = 'foo'.match(/^(\d+)$/);
// TypeError: Cannot read property 'Symbol(Symbol.iterator)' of "foo".match
```

Into this:

```js
const expectMatch = require('expect-match');
const [, b] = expectMatch('foo', /^(\d+)$/);
// TypeError: String did not match pattern
```

For convenience it also exposes an error code (`ENOMATCH`).
