// math.test.js
const { add } = require('./math');
const assert = require('assert');

describe('Add Function', () => {
  it('should add two numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
  });
});