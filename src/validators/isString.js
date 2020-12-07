"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
/* eslint-disable import/prefer-default-export */
const ramda_1 = require("ramda");
/**
  * Функция проверяет строка ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая переменная
  * @return {boolean}
  *
  * @example
  *
  *      isString(12);      //=> false
  *      isString('abc');      //=> true
 */
exports.isString = ramda_1.is(String);
