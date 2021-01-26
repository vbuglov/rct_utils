"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowFirst = void 0;
/* eslint-disable quotes */
const ramda_1 = require("ramda");
/* eslint-disable import/prefer-default-export */
/**
  * Функция обрезает строку до необходимого количества символов, если в этом есть необходимость
  *
  * @category masks
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @param {number} key - некоторое значение ключа
  * @return {string}
  * @example
  *
  *      masks.lwFirstLett('String') //=> 'string'
  */
const lowFirst = (string) => {
    if (string && string[0] && ramda_1.type(string) === "String")
        return string[0].toLowerCase() + string.slice(1);
    const error = `error by func lowerFirstLetter, ivalid string. string can't equal ${string}`;
    return error;
};
exports.lowFirst = lowFirst;
