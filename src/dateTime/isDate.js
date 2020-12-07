"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
//@ts-nocheck
const ramda_1 = require("ramda");
const isDate = (date) => ramda_1.type(date) === "Date";
exports.isDate = isDate;
