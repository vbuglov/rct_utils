"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectGenerator = void 0;
const randomElement_1 = require("./randomElement");
const random_1 = require("./random");
const faker = require("faker");
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
