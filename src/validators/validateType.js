"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateType = void 0;
const ramda_1 = require("ramda");
const isNumber_1 = require("./isNumber");
const isObject_1 = require("./isObject");
const validateType = (val, type) => ramda_1.cond([
    [ramda_1.equals('number'), () => !isNumber_1.isNumber(val) && 'числовое значение'],
    [ramda_1.equals('object'), () => !isObject_1.isObject && 'не верное значение'],
    [ramda_1.T, ramda_1.always(false)]
])(type);
exports.validateType = validateType;
