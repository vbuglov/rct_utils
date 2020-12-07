"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = void 0;
const formatDate_1 = require("./formatDate");
const getDate = (date) => {
    date = new Date(date);
    return {
        mth: formatDate_1.formatDate(date.getMonth()),
        day: date.getDate(),
        year: date.getFullYear()
    };
};
exports.getDate = getDate;
