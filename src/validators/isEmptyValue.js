"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyValue = void 0;
const ramda_1 = require("ramda");
exports.isEmptyValue = ramda_1.compose(ramda_1.isEmpty, ramda_1.trim);
