"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const ramda_1 = require("ramda");
const formatDate = (t) => ramda_1.inc(t) >= 10 ? ramda_1.inc(t) : `0${ramda_1.inc(t)}`;
exports.formatDate = formatDate;
