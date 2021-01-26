"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captlzFrst = void 0;
/* eslint-disable import/prefer-default-export */
/**
  * Функция возвращает строку где первый символ становится заглавным
  *
  * @category masks
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @return {string}
  * @example
  *
  *      masks.lwFirstLett('string') //=> 'String'
  */
const captlzFrst = (string) => {
    if (string)
        return string.charAt(0).toUpperCase() + string.slice(1);
    const error = `error by func capitalizeFirstLetter, ivalid string. string can't equal ${string}`;
    return error;
};
exports.captlzFrst = captlzFrst;
