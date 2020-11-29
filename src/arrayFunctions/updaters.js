"use strict";

exports.__esModule = true;
exports.updateValueInObjectfListOfObjects = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

/* eslint-disable max-len */

/**
  * Функция возвращает обновленный массив объектов, в которых присутсвует заданный ключ. Поиск ведеться по массиву с обхектам
  *
  * @category ArrayUpdater
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
const updateValueInObjectfListOfObjects = function updateValueInObjectfListOfObjects(searchKeyName, searchKeyValue, updatebleValueKeyName, updatebleValueFunction, array) {
  const objId = getIdByKeyAndValueFromArray(searchKeyName, searchKeyValue, array);
  const updatedObj = array[objId];
  updatedObj.updatebleValueKeyName = updatebleValueFunction(updatedObj.updatebleValueKeyName);
  const newArray = array;
  newArray[objId] = updatedObj;
  return newArray;
};

exports.updateValueInObjectfListOfObjects = updateValueInObjectfListOfObjects;