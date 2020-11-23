"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updObjK = void 0;

var _ramda = require("ramda");

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
var updObjK = function updObjK(object, updater) {
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

exports.updObjK = updObjK;