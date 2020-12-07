"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasVal = void 0;
const ramda_1 = require("ramda");
/**
  * Функция проверяет есть ли подобный элемент в объекте. Возвращаемая функция карировання
  * @category validators
  * @method
  * @since v0.1.0
  * @param {Object} obj - объект в котором ведётся поиск
  * @param {string} key - ключ значения
  * @return {boolean}
  *
  * @example
  *
  *      const obj = {1}
  *      hasVal(12);      //=> false
  *      hasVal([]);      //=> true
 */
exports.hasVal = ramda_1.curry((obj, el) => !!obj[el] && !!obj[el].value);
