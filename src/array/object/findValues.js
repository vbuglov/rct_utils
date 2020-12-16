"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findValues = void 0;
const ramda_1 = require("ramda");
const errorWrapper_1 = require("../../errorWrapper/errorWrapper");
/**
  * Функция возвращает массив значений ключей из аналогичных объектов по названию ключа.
  *
  * @category ArrayOfObjects
  * @method
  * @since v0.1.0
  * @param {Array} array - массив в котором ведёться поиск
  * @param {string} key - некоторое значение ключа
  * @return {Array} - values[]
  *
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}];
  *      findValues(newArray, "foo");      //=> ["hello", "bye"];
  */
const findValues = (array, key, errorMod = false) => {
    let answer = undefined;
    let err = null;
    try {
        if (ramda_1.is(Array, array)) {
            answer = array.map((el) => {
                const item = ramda_1.pickAll([key], el);
                return ramda_1.values(item)[0];
            });
        }
        else {
            answer = null;
        }
    }
    catch (error) {
        err = error;
    }
    return errorWrapper_1.default(err, answer, errorMod);
};
exports.findValues = findValues;
