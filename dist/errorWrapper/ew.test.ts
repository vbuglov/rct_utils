import { AOO } from '../array/object/index';
import errorWrapper from './errorWrapper';

const errFn = () => {
  let answer = undefined;
  let error = null;
  try {
    answer = error.spo.ror.gno() * 20;
  } catch (err) {
    error = err;
  }
  return errorWrapper(error, answer, true);
}

const array = [
  { id: 64, name: "42942-5693", county: "Borders" },
  { id: 4, name: "23465-7870", county: "Berkshire" },
  { id: 13, name: "19616-0095", county: "Cambridgeshire" }
];

describe('tests of errorWrapper', () => {
  test('without mod', () => {
    const newList = AOO.update(array, { key: "id", value: 4 }, { id: 5, name: '25-312' });
    expect(newList).toEqual([
      { id: 64, name: "42942-5693", county: "Borders" },
      { id: 5, name: '25-312' },
      { id: 13, name: "19616-0095", county: "Cambridgeshire" }
    ]);
  });
  test('with mod and without error', () => {
    const newList = AOO.update(array, { key: "id", value: 4 }, { id: 5, name: '25-312' }, true);
    expect(newList).toEqual({
      answer: [
        { id: 64, name: "42942-5693", county: "Borders" },
        { id: 5, name: '25-312' },
        { id: 13, name: "19616-0095", county: "Cambridgeshire" }
      ],
      error: null,
      status: 'OK'
    });
  });
  test('with mod and with error', () => {
    const newList = errFn();
    expect(newList).toEqual({
      answer: undefined,
      error: "TypeError: Cannot read property 'spo' of null",
      status: 'ERROR'
    });
  });
});