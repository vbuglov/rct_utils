import { values, is, keys, zipObj } from 'ramda'

/**
  * Функция преобразовывает ключи в объекте в соотсвтвиие с функцией update
  * 
  * @category ArrayUpdater
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
export const updObjK = (object, updater) => {
  if (is(Object, object)) {
    const objKeys = keys(object);
    const objValues = values(object);
    const updatedKeys = objKeys.map((el) => updater(el));
    return zipObj(updatedKeys, objValues)
  }
  console.error('variable is not a object');
  return null;
}