"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formateDateToString = void 0;
const isDate_1 = require("./isDate");
const formateDateToString = (date) => isDate_1.isDate(date) && date.toLocaleString();
exports.formateDateToString = formateDateToString;
