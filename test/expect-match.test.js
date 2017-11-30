'use strict';

const assert = require('assertive');

const expectMatch = require('../');

describe('expect-match', () => {
  it('is empty', () => {
    assert.deepEqual({}, expectMatch);
  });
});
