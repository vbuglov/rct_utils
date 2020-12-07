"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const ramda_1 = require("ramda");
/**
  * Функция проверяет число ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая перменная
  * @return {boolean}
  *
  * @example
  *
  *      isArr(12);      //=> false
  *      isArr([]);      //=> true
 */
exports.isNumber = ramda_1.both(ramda_1.is(Number), ramda_1.complement(ramda_1.equals(NaN)));
