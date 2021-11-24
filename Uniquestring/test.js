const approach1 = require('./isunique');

test('approach1 should be a function', () => {
  expect(typeof approach1).toEqual('function');
});

test('approach1 should return true', () => {
  expect(approach1('document')).toBeTruthy();
});