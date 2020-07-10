import { getRandomNumber, getPrimes } from '..';

test('Check Validation of random function', () => {
  expect(typeof getRandomNumber<'number'>(3, 'number')).toBe('number');
  expect(typeof getRandomNumber<'string'>(3, 'string')).toBe('string');
});

test('Check validation of prime function', () => {
  expect(typeof getPrimes(500)).toBe('object');
});
