"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finderList = void 0;
/* eslint-disable import/prefer-default-export */
const ramda_1 = require("ramda");
const errorWrapper_1 = require("../../errorWrapper/errorWrapper");
/**
  * Функция возвращает массив объектов, в которых присутсвует заданный
  * ключ. Поиск ведеться по массиву с объектами.
  *
  * @category ArrayOfObjects
  * @method
  * @since v0.1.0
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @return {Object[]}
  * @example
  *
  *   const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}];
  *   finderList(newArray, "bar");
  *   //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}];
  */
const finderList = (array, key, errorMod = false) => {
    if (!ramda_1.is(Array, array))
        return [];
    let answer = undefined;
    let error = null;
    try {
        answer = array.filter(el => el[key]);
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(error, answer, errorMod);
};
exports.finderList = finderList;
