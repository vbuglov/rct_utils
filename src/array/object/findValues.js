"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findValues = void 0;
const ramda_1 = require("ramda");
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
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrToVal(newArray, "foo");      //=> ["hello", "bye"]
  */
const findValues = (array, key) => {
    if (ramda_1.is(Array, array)) {
        return array.map((el) => {
            const item = ramda_1.pickAll([key], el);
            return ramda_1.values(item)[0];
        });
    }
    return null;
};
exports.findValues = findValues;
