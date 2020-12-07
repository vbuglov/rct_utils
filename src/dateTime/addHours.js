"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHours = void 0;
const addHours = (date, h) => {
    date.setHours(date.getHours() + h);
    return date;
};
exports.addHours = addHours;
