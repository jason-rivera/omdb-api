const sum = require('./maths');

test('adds 2 numbers', () => {
  expect(sum(1,2)).toBe(3);
})