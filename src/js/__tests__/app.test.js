/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Validator from '../app';

test('app test', () => {
  const name = new Validator('paul-78_s');
  const result = true;
  expect(result).toBe(name.validateUsername());
});

test('app test name1234', () => {
  const name = new Validator('paul-7877_s');
  const result = false;
  expect(result).toBe(name.validateUsername());
});
