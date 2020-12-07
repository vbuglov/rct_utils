"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nilOrEmpty = void 0;
const ramda_1 = require("ramda");
exports.nilOrEmpty = ramda_1.either(ramda_1.isEmpty, ramda_1.isNil);
