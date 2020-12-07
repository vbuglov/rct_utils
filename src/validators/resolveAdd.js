"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAdd = void 0;
const ramda_1 = require("ramda");
const resolveAdd = ramda_1.curry((resolver, obj, el) => ramda_1.merge(obj, resolver(el)));
exports.resolveAdd = resolveAdd;
