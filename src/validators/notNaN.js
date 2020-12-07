"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notNaN = void 0;
const ramda_1 = require("ramda");
exports.notNaN = ramda_1.compose(ramda_1.not, isNaN);
