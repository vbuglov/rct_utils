"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = void 0;
const aooFactory_1 = require("./aooFactory");
const arrayGenerator_1 = require("./arrayGenerator");
const objectGenerator_1 = require("./objectGenerator");
const random_1 = require("./random");
const randomElement_1 = require("./randomElement");
const rKey_1 = require("./rKey");
exports.generator = {
    aooFactory: aooFactory_1.aooFactory,
    arrayGenerator: arrayGenerator_1.arrayGenerator,
    objectGenerator: objectGenerator_1.objectGenerator,
    random: random_1.random,
    randomElement: randomElement_1.randomElement,
    rKey: rKey_1.rKey
};
