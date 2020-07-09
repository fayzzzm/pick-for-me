import math from '../math';

test('Check Validation of random function', () => {
  expect(typeof math.getRandomNumber<'number'>(3, 'number')).toBe('number');
  expect(typeof math.getRandomNumber<'string'>(3, 'string')).toBe('string');
});

test('Check validation of prime function', () => {
  expect(typeof math.getPrimes(500)).toBe('object');
});
