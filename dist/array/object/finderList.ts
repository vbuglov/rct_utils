/* eslint-disable import/prefer-default-export */
import { is } from 'ramda'


/**
  * Функция возвращает массив объектов, в которых присутсвует заданный
  * ключ. Поиск ведеться по массиву с объектами.
  *
  * @category ArrayOfObjects
  * @method
  * @since v0.1.0
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @return {Object[]}
  * @example
  *
  *   const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}];
  *   finderList(newArray, "bar");
  *   //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}];
  */
const finderList = (array: any[], key: string): any[] => {
  if (!is(Array, array)) return [];
  let answer = [];
  try {
    answer = array.filter(el => el[key]);
  } catch (error) {
    console.log(error);
  }
  return answer;
}

export { finderList };
