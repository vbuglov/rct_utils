/* eslint-disable max-len */
import { values, is, keys, zipObj } from 'ramda'


/**
  * Функция преобразовывает ключи в объекте в соотсвтвиие с функцией update
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {object} object - название ключа из объекта
  * @param {function} updater - некоторое значение ключа
  * @return {object[]}
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}]
  *      arrayObjsToArrayObjs(newArray, "bar");      //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}]
  */
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


