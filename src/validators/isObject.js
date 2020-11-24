"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет объект ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая переменная
  * @return {boolean}
  *
  * @example
  *
  *      isObject(12);      //=> false
  *      isObject({});      //=> true
 */
var isObject = (0, _ramda.is)(Object);
exports.isObject = isObject;