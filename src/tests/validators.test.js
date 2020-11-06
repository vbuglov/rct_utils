import {
  notEmpty,
  isEmptyValue,
  nilOrEmpty,
  isObject,
  isString,
  emptyArr,
} from '../../validators'


describe('should not be empty', () => {
  test('for empty module', () => {
    const emp = {};

    expect(notEmpty(emp)).toBe(false)
  })
  test('for non empty module', () => {
    const nonEmp = { a: 1 };

    expect(notEmpty(nonEmp)).toBe(true)
  })
})

describe('should not be empty value', () => {
  test('for non empty string', () => {
    const nonEmp = 'super const';

    expect(isEmptyValue(nonEmp)).toBe(false)
  })
})

describe('should be null or empty', () => {
  test('for nil', () => {
    const nil = null;

    expect(nilOrEmpty(nil)).toBe(true)
  })
  test('for empty', () => {
    const nil = {};

    expect(nilOrEmpty(nil)).toBe(true)
  })
  test('for object', () => {
    const nil = { a: 2 };

    expect(nilOrEmpty(nil)).toBe(false)
  })
})

describe('is it object', () => {
  test('for object', () => {
    const obj = { a: 2 };

    expect(isObject(obj)).toBe(true)
  })
  test('for string', () => {
    const str = 'alala';

    expect(isObject(str)).toBe(false)
  })
  test('for list', () => {
    const arr = [1, 2, 3];

    expect(isObject(arr)).toBe(true)
  })
})

describe('is it string', () => {
  test('for object', () => {
    const obj = { a: 2 };

    expect(isString(obj)).toBe(false)
  })
  test('for string', () => {
    const str = 'alala';

    expect(isString(str)).toBe(true)
  })
  test('for list', () => {
    const arr = [1, 2, 3];

    expect(isString(arr)).toBe(false)
  })
})

describe('is empty list', () => {
  test('for empty list', () => {
    const arr = [];

    expect(emptyArr(arr)).toBe(true)
  })
  test('for non empty list', () => {
    const arr = [1, 2, 3];
    expect(emptyArr(arr)).toBe(false)
  })
})
