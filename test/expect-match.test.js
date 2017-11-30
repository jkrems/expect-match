'use strict';

const assert = require('assertive');

const expectMatch = require('../');

describe('expectMatch', () => {
  it('is a function', () => {
    assert.hasType(Function, expectMatch);
  });

  it('acts like the normal .match', () => {
    const str = 'xyz-F00B-ar';
    const pattern = /^(\w+)-\w+-(\w+)$/;
    assert.deepEqual(str.match(pattern), expectMatch(str, pattern));
  });

  it('throws if the pattern does not match', () => {
    const err = assert.throws(() => expectMatch('xyz', /\d+/));
    assert.equal('String did not match pattern', err.message);
    assert.equal(TypeError, err.constructor);
  });
});
