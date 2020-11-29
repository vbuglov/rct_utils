"use strict";

exports.__esModule = true;
exports.arrObjsToArrObjsByK = exports.arrToVal = exports.arrToIdKV = exports.arrToObjKV = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

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
  *      arrToObjKV("bar", 17, newArray);      //=> {foo: "hello", bar: 17, isCheck: true}
 */
const arrToObjKV = function arrToObjKV(key, value, array) {
  let searcheableObject = null;

  try {
    const sKey = (0, _ramda().lensProp)(key);
    array.forEach(function (object) {
      const currentValue = (0, _ramda().view)(sKey, object);
      if (currentValue === value) searcheableObject = object;
    });
  } catch (error) {}

  return searcheableObject;
};
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


exports.arrToObjKV = arrToObjKV;

const arrToIdKV = function arrToIdKV(key, value, array) {
  let id = null;

  try {
    const sKey = (0, _ramda().lensProp)(key);
    array.forEach(function (object, idx) {
      const currentValue = (0, _ramda().view)(sKey, object);
      if (currentValue === value) id = idx;
    });
  } catch (error) {}

  return id;
};
/**
  * Функция возвращает массив значений ключей из аналогичных объектов по названию ключа.
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {Array} array - массив в котором ведёться поиск
  * @param {string} key - некоторое значение ключа
  * @return {Array} - values[]
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrToVal(newArray, "foo");      //=> ["hello", "bye"]
  */


exports.arrToIdKV = arrToIdKV;

const arrToVal = function arrToVal(array, key) {
  if ((0, _ramda().is)(Array, array)) {
    return array.map(function (el) {
      const item = (0, _ramda().pickAll)([key], el);
      return (0, _ramda().values)(item)[0];
    });
  }

  return null;
};
/**
  * Функция возвращает массив объектов, в которых присутсвует заданный ключ. Поиск ведеться по массиву с объектами
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @return {Object[]}
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}]
  *      arrObjsToArrObjsByK(newArray, "bar");      //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}]
  */


exports.arrToVal = arrToVal;

const arrObjsToArrObjsByK = function arrObjsToArrObjsByK(array, key) {
  let answer = [];

  try {
    answer = array.map(function (el) {
      if (el[key]) {
        return el;
      }

      return null;
    }).filter(function (el) {
      return el;
    });
  } catch (error) {
    console.log(error);
  }

  return answer;
};

exports.arrObjsToArrObjsByK = arrObjsToArrObjsByK;