import { utils } from './index'

describe('tests of encrypt function', () => {
  test('encrypt("hellow world", "1234")', () => {
    const answer = utils.encrypt("hellow world", "1234");
    expect(answer).toEqual("597bb12abd77e8d8791065c5");
  });
});

describe('tests of decrypte function', () => {
  test('decrypte("597bb12abd77e8d8791065c5", "1234")', () => {
    const answer = utils.decrypte("597bb12abd77e8d8791065c5", "1234");
    expect(answer).toEqual("hellow world");
  });
});

describe('tests of isUpperCase function', () => {
  test('symbol is not upper', () => {
    const answer = utils.isUpperCase('s');
    expect(answer).toEqual(false);
  });
  test('symbol is upper', () => {
    const answer = utils.isUpperCase('S');
    expect(answer).toEqual(true);
  });
  test('string is not upper', () => {
    const answer = utils.isUpperCase('str');
    expect(answer).toEqual(false);
  });
  test('string is upper', () => {
    const answer = utils.isUpperCase('STR');
    expect(answer).toEqual(true);
  });
  test('string is mix', () => {
    const answer = utils.isUpperCase('StR');
    expect(answer).toEqual(false);
  });
});