"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyArr = void 0;
const ramda_1 = require("ramda");
const isArr_1 = require("./isArr");
exports.emptyArr = ramda_1.both(isArr_1.isArr, ramda_1.isEmpty);
