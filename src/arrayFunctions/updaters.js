"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValueInObjectfListOfObjects = void 0;

var _ramda = require("ramda");

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
var updateValueInObjectfListOfObjects = function updateValueInObjectfListOfObjects(searchKeyName, searchKeyValue, updatebleValueKeyName, updatebleValueFunction, array) {
  var objId = getIdByKeyAndValueFromArray(searchKeyName, searchKeyValue, array);
  var updatedObj = array[objId];
  updatedObj.updatebleValueKeyName = updatebleValueFunction(updatedObj.updatebleValueKeyName);
  var newArray = array;
  newArray[objId] = updatedObj;
  return newArray;
};

exports.updateValueInObjectfListOfObjects = updateValueInObjectfListOfObjects;