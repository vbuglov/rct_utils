"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValueInObjectfListOfObjects = exports.updateObjectKeys = exports.getArrayOfObjectsByKey = exports.getArrayOfValuesByKey = exports.getIdByKeyAndValueFromArray = exports.getObjectByKeyAndValueFromArray = void 0;

var _ramda = require("ramda");

/* eslint-disable max-len */

/**
  * Функция возвращает последний аналогичный объект по ключу и значению из
  * массива объектов. Функция подразумивает что в переданном списке будет один 
  * объект с переданным ключем и параметром..
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
var getObjectByKeyAndValueFromArray = function getObjectByKeyAndValueFromArray(key, value, array) {
  var sKey = (0, _ramda.lensProp)(key);
  var searcheableObject = null;
  array.forEach(function (object) {
    var currentValue = (0, _ramda.view)(sKey, object);
    if (currentValue === value) searcheableObject = object;
  });
  return searcheableObject;
};
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


exports.getObjectByKeyAndValueFromArray = getObjectByKeyAndValueFromArray;

var getIdByKeyAndValueFromArray = function getIdByKeyAndValueFromArray(key, value, array) {
  var sKey = (0, _ramda.lensProp)(key);
  var id = null;
  array.forEach(function (object, idx) {
    var currentValue = (0, _ramda.view)(sKey, object);
    if (currentValue === value) id = idx;
  });
  return id;
};
/**
  * Функция возвращает массив значений из аналогичных объектов по названию ключа.
  *
  * @category Finders
  * @method
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @returns {array}
  */


exports.getIdByKeyAndValueFromArray = getIdByKeyAndValueFromArray;

var getArrayOfValuesByKey = function getArrayOfValuesByKey(array, key) {
  if ((0, _ramda.is)(Array, array)) {
    return array.map(function (el) {
      var item = (0, _ramda.pickAll)([key], el);
      return (0, _ramda.values)(item)[0];
    });
  } // eslint-disable-next-line no-console


  console.error('function is getArrayOfValuesByKey error, your array is not Array');
  return null;
};

exports.getArrayOfValuesByKey = getArrayOfValuesByKey;

var getArrayOfObjectsByKey = function getArrayOfObjectsByKey(array, key) {
  return array.map(function (el) {
    if (el[key]) {
      return el;
    }

    return null;
  }).filter(function (el) {
    return el;
  });
};

exports.getArrayOfObjectsByKey = getArrayOfObjectsByKey;

var updateObjectKeys = function updateObjectKeys(object, updater) {
  if ((0, _ramda.is)(Object, object)) {
    var objKeys = (0, _ramda.keys)(object);
    var objValues = (0, _ramda.values)(object);
    var updatedKeys = objKeys.map(function (el) {
      return updater(el);
    });
    return (0, _ramda.zipObj)(updatedKeys, objValues);
  }

  console.error('variable is not a object');
  return null;
};
/**
  * Складываем числа
  *
  * @param {number} first - первое число
  * @param {number} second - второе число
  * @returns {number}
  */


exports.updateObjectKeys = updateObjectKeys;

var updateValueInObjectfListOfObjects = function updateValueInObjectfListOfObjects(searchKeyName, searchKeyValue, updatebleValueKeyName, updatebleValueFunction, array) {
  var objId = getIdByKeyAndValueFromArray(searchKeyName, searchKeyValue, array);
  var updatedObj = array[objId];
  updatedObj.updatebleValueKeyName = updatebleValueFunction(updatedObj.updatebleValueKeyName);
  var newArray = array;
  newArray[objId] = updatedObj;
  return newArray;
};

exports.updateValueInObjectfListOfObjects = updateValueInObjectfListOfObjects;