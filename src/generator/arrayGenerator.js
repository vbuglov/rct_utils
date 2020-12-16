"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayGenerator = void 0;
const randomElement_1 = require("./randomElement");
const random_1 = require("./random");
/**
  * Функция гененрирует случайный массив
  *
  * @category generator
  * @method
  * @since v0.1.0
  * @param {Number} - запас для генерации массива
  * @return {String}
  */
const arrayGenerator = (reserve) => {
    const max = random_1.random(Math.floor(reserve / 2));
    let array = [];
    for (let i = 0; i < max; i++) {
        array = [...array, randomElement_1.randomElement(max)];
    }
    return array;
};
exports.arrayGenerator = arrayGenerator;
