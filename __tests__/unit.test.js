// unit.test.js
// bruh
// bruh

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid ph', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid ph with paren', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('invalid ph - too few digits', () => {
  expect(isPhoneNumber('567')).toBe(false);
});

test('invalid ph ― alphabetic', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});


test('valid email with 3 letter domain', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email with 2 letter domain', () => {
  expect(isEmail('user@mail.co')).toBe(true);
});

test('invalid email - no @', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email ― ..', () => {
  expect(isEmail('user@domain..com')).toBe(false);
});


test('valid strong password', () => {
  expect(isStrongPassword('Abcdefg1')).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword('Good_pass123')).toBe(true);
});

test('invalid strong password ― too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

test('invalid strong password ― starts with digit', () => {
  expect(isStrongPassword('1Badpass')).toBe(false);
});


test('valid date', () => {
  expect(isDate('12/25/2025')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('1/1/1999')).toBe(true);
});

test('invalid date ― ISO format', () => {
  expect(isDate('2025-12-25')).toBe(false);
});

test('invalid date ― month is 2 digit', () => {
  expect(isDate('12/01/25')).toBe(false);
});


test('valid hex - white', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('valid hex - shorthand', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('invalid hex ― too few char', () => {
  expect(isHexColor('#12456')).toBe(false);
});

test('invalid hex ― too many char', () => {
  expect(isHexColor('#1234567')).toBe(false);
});