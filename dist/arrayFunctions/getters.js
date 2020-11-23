import { lensProp, view, pickAll, values, is } from 'ramda'


/**
  * Функция возвращает последний аналогичный объект по ключу и значению из
  * массива объектов. Функция подразумивает что в переданном списке будет один 
  * объект с переданным ключем и параметром.
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {string} key - название ключа из объекта
  * @param {any} value - некоторое значение ключа
  * @param {object[]} array - массив из объектов в котором ведеться поиск
  * @return {object}
  * @todo implement any action
  *
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrayToObjsKV("bar", 17, newArray);      //=> {foo: "hello", bar: 17, isCheck: true}
 */
export const arrayToObjsKV = (key, value, array) => {
  const sKey = lensProp(key);
  let searcheableObject = null;
  array.forEach((object) => {
    const currentValue = view(sKey, object);
    if (currentValue === value) searcheableObject = object
  })
  return searcheableObject;
}

/**
  * Функция возвращает номер объекта в массиве
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {string} key - название ключа из объекта
  * @param {any} value - некоторое значение ключа
  * @param {object[]} array - массив из объектов в котором ведеться поиск
  * @return {number} - порядковый номер объекта в массиве
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrayToObjsKV("foo", "bye", newArray);      //=> 1
  */
export const arrayToIdKV = (key, value, array) => {
  const sKey = lensProp(key);
  let id = null;
  array.forEach((object, idx) => {
    const currentValue = view(sKey, object);
    if (currentValue === value) id = idx
  })
  return id;
}

/**
  * Функция возвращает массив значений ключей из аналогичных объектов по названию ключа.
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @return {array} - values[]
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrayToValues(newArray, "foo");      //=> ["hello", "bye"]
  */
export const arrayToValues = (array, key) => {
  if (is(Array, array)) {
    return array.map((el) => {
      const item = pickAll([key], el);
      return values(item)[0];
    })
  }
  // eslint-disable-next-line no-console
  console.error('function is getArrayOfValuesByKey error, your array is not Array');
  return null;
}

/**
  * Функция возвращает массив объектов, в которых присутсвует заданный ключ. Поиск ведеться по массиву с обхектам
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @return {object[]}
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}]
  *      arrayObjsToArrayObjs(newArray, "bar");      //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}]
  */
export const arrayObjsToArrayObjs = (array, key) => {
  return array.map((el) => {
    if (el[key]) {
      return el;
    }
    return null
  }).filter((el) => el)
}
