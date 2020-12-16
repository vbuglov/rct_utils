"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectGenerator = void 0;
const randomElement_1 = require("./randomElement");
const random_1 = require("./random");
const faker = require("faker");
/**
  * Функция гененрирует случайный объект
  *
  * @category generator
  * @method
  * @since v0.1.0
  * @param {Number} - запас для генерации объекта
  * @return {String}
  */
const objectGenerator = (reserve) => {
    const max = random_1.random(Math.floor(reserve / 2));
    let array = [];
    for (let i = 0; i < max; i++) {
        array = [...array, [[faker.random.word()], randomElement_1.randomElement(max)]];
    }
    //@ts-ignore
    return Object.fromEntries(array);
};
exports.objectGenerator = objectGenerator;
