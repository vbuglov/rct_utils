"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkElementInArr = void 0;
const ramda_1 = require("ramda");
const isArr_1 = require("./isArr");
const isInArr_1 = require("./isInArr");
//@ts-ignore
exports.checkElementInArr = ramda_1.curry((arr, el) => ramda_1.both(isArr_1.isArr, isInArr_1.isInArr(el))(arr));
