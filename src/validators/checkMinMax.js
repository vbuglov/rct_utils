"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMinMax = void 0;
//@ts-nocheck
const ramda_1 = require("ramda");
const isKeysExist_1 = require("./isKeysExist");
const isKeyExist_1 = require("./isKeyExist");
const checkMinMax = (params) => ramda_1.cond([
    [isKeysExist_1.isKeysExist(['min', 'max']), ({ l, min, max }) => !(l <= max && l >= min) && `От ${min} до ${max} симв.`],
    [isKeyExist_1.isKeyExist('min'), ({ l, min }) => !(l >= min) && `Мин. ${min} симв`],
    [isKeyExist_1.isKeyExist('max'), ({ l, max }) => !(l <= max) && `Макс. ${max} симв.`],
    [ramda_1.T, ramda_1.always(null)]
])(params);
exports.checkMinMax = checkMinMax;
