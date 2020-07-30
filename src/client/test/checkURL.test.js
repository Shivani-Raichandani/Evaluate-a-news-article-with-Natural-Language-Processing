import { checkURL } from '../js/checkURL'

test('validate url', () => {
  expect(checkURL('https://www.google.com')).toBe(true);
  expect(checkURL('abcxyz')).toBe(false);
});