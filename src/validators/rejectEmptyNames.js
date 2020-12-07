"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectEmptyNames = void 0;
const ramda_1 = require("ramda");
//@ts-ignore
exports.rejectEmptyNames = ramda_1.reject((el) => ramda_1.isNil(el) || ramda_1.isNil(el.name));
