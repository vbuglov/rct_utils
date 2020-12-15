"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomElement = void 0;
const ramda_1 = require("ramda");
const arrayGenerator_1 = require("./arrayGenerator");
const objectGenerator_1 = require("./objectGenerator");
const faker = require("faker");
const randomElement = (reserve) => {
    return ramda_1.cond([
        [ramda_1.equals(0), () => faker.phone.phoneNumber()],
        [ramda_1.equals(1), () => faker.address.country()],
        [ramda_1.equals(2), () => faker.internet.email()],
        [ramda_1.equals(3), () => faker.name.lastName()],
        [(el) => el > 3 && el < 6, () => objectGenerator_1.objectGenerator(reserve)],
        [(el) => el >= 6, () => arrayGenerator_1.arrayGenerator(reserve)],
        [ramda_1.T, () => null]
        //@ts-ignore
    ])(random(10));
};
exports.randomElement = randomElement;
