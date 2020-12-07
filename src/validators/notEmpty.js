"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notEmpty = void 0;
const ramda_1 = require("ramda");
exports.notEmpty = ramda_1.compose(ramda_1.not, ramda_1.isEmpty);
