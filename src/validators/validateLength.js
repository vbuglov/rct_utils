"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLength = void 0;
//@ts-nocheck
const ramda_1 = require("ramda");
const checkMinMax_1 = require("./checkMinMax");
const isKeyExist_1 = require("./isKeyExist");
const validateLength = (val, length) => ramda_1.cond([
    [isKeyExist_1.isKeyExist('equals'), ({ equals }) => val.length !== equals && `${equals} симв.`],
    [isKeyExist_1.isKeyExist('strict'), ({ min, max }) => checkMinMax_1.checkMinMax({ l: val.length, min: min && min + 1, max: max && max - 1 })],
    [isKeyExist_1.isKeyExist('min') || isKeyExist_1.isKeyExist('max'), ({ min, max }) => checkMinMax_1.checkMinMax({ l: val.length, min, max })],
    [ramda_1.T, ramda_1.always(false)]
])(length);
exports.validateLength = validateLength;
