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