import { pickAll, values, is } from 'ramda'
import errorWrapper from '../../errorWrapper/errorWrapper';

/**
  * Функция возвращает массив значений ключей из аналогичных объектов по названию ключа.
  *
  * @category ArrayOfObjects
  * @method
  * @since v0.1.0
  * @param {Array} array - массив в котором ведёться поиск
  * @param {string} key - некоторое значение ключа
  * @return {Array} - values[]
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}];
  *      findValues(newArray, "foo");      //=> ["hello", "bye"];
  */
const findValues = (array: any[], key: string, errorMod: boolean = false): string[] | null => {
  let answer: any = undefined;
  let err: any = null;
  try {
    if (is(Array, array)) {
      answer = array.map((el) => {
        const item: any = pickAll([key], el);
        return values(item)[0];
      })
    } else {
      answer = null;
    }
  } catch (error) {
    err = error;
  }
  return errorWrapper(err, answer, errorMod)
};

export { findValues };