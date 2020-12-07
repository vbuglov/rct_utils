"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notNilAndNotNan = void 0;
const ramda_1 = require("ramda");
const notNaN_1 = require("./notNaN");
const notNil_1 = require("./notNil");
exports.notNilAndNotNan = ramda_1.both(notNaN_1.notNaN, notNil_1.notNil);
