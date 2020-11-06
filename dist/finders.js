/* eslint-disable max-len */
import { lensProp, view, pickAll, values, is, keys, zipObj } from 'ramda'

/**
  * Функция возвращает последний аналогичный объект по ключу и значению из
  * массива объектов. Функция подразумивает что в переданном списке будет один 
  * объект с переданным ключем и параметром.
  *
  * @category Finders
  * @method
  * @param {string} key - название ключа из объекта
  * @param {any} value - некоторое значение ключа
  * @param {array} array - массив в котором ведеться поиск
  * @returns {object} - искомый объект
  * @todo implement any action
  *
  */
export const getObjectByKeyAndValueFromArray = (key, value, array) => {
  const sKey = lensProp(key);
  let searcheableObject = null;
  array.forEach((object) => {
    const currentValue = view(sKey, object);
    if (currentValue === value) searcheableObject = object
  })
  return searcheableObject;
}

/**
  * Функция возвращает последний аналогичный объект по ключу и значению из массива объектов. Функция подразумивает что в переданном списке будет один объект с переданным ключем и параметром.
  *
  * @category Finders
  * @method
  * @param {string} key - название ключа из объекта
  * @param {any} value - некоторое значение ключа
  * @param {array} array - массив в котором ведеться поиск
  * @returns {object} - искомый объект
  */

export const getIdByKeyAndValueFromArray = (key, value, array) => {
  const sKey = lensProp(key);
  let id = null;
  array.forEach((object, idx) => {
    const currentValue = view(sKey, object);
    if (currentValue === value) id = idx
  })
  return id;
}

/**
  * Функция возвращает массив значений из аналогичных объектов по названию ключа.
  *
  * @category Finders
  * @method
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @returns {array}
  */
export const getArrayOfValuesByKey = (array, key) => {
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

export const getArrayOfObjectsByKey = (array, key) => {
  return array.map((el) => {
    if (el[key]) {
      return el;
    }
    return null
  }).filter((el) => el)
}

export const updateObjectKeys = (object, updater) => {
  if (is(Object, object)) {
    const objKeys = keys(object);
    const objValues = values(object);
    const updatedKeys = objKeys.map((el) => updater(el));
    return zipObj(updatedKeys, objValues)
  }
  console.error('variable is not a object');
  return null;
}


/**
  * Складываем числа
  *
  * @param {number} first - первое число
  * @param {number} second - второе число
  * @returns {number}
  */
export const updateValueInObjectfListOfObjects = (
  searchKeyName,
  searchKeyValue,
  updatebleValueKeyName,
  updatebleValueFunction,
  array
) => {
  const objId = getIdByKeyAndValueFromArray(searchKeyName, searchKeyValue, array);
  const updatedObj = array[objId];
  updatedObj.updatebleValueKeyName = updatebleValueFunction(updatedObj.updatebleValueKeyName);
  const newArray = array;
  newArray[objId] = updatedObj;
  return newArray;
}
