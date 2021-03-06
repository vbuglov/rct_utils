"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rKey = void 0;
/**
  * Функция гененрирует случайную строку, обычно используется для передачи ключа DOM объе
  *
  * @category generator
  * @method
  * @since v0.1.0
  * @return {String}
  *
  * @example
  *
  *      rKey();
  *      //=> "eh80f1l0o"
  *
  *       rKey();
  *      //=> ""ijbs1eovg""
  */
const rKey = () => Math.random().toString(32).substr(4);
exports.rKey = rKey;
