"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateByType = void 0;
const ramda_1 = require("ramda");
const getDateByType = (date) => {
    if (ramda_1.type(date) === 'String')
        return new Date(date.replace(/\s/, 'T'));
    return new Date(date);
};
exports.getDateByType = getDateByType;
