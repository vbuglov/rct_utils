import { masks } from './index'

describe('tests of wrapNumMsk function', () => {
  test('test of one simbol', () => {
    const result = masks.wrapNumMsk('r');
    expect(result).toEqual('');
  });
  test('test of two simbols', () => {
    const result = masks.wrapNumMsk('rи');
    expect(result).toEqual('');
  });
  test('test of empty line', () => {
    const result = masks.wrapNumMsk('');
    expect(result).toEqual('');
  });
  test('test of add number', () => {
    const result = masks.wrapNumMsk('rty1');
    expect(result).toEqual('1');
  });
  test('test of add numbers', () => {
    const result = masks.wrapNumMsk('rty12');
    expect(result).toEqual('12');
  });
  test('test of numbers and simbols', () => {
    const result = masks.wrapNumMsk('r3ty12');
    expect(result).toEqual('312');
  });
  test('test of add simbols', () => {
    const result = masks.wrapNumMsk('rty');
    expect(result).toEqual('');
  });
});