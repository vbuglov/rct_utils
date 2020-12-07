"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
const formatTime_1 = require("./formatTime");
const getTime = (date) => {
    date = new Date(date);
    return {
        hr: formatTime_1.formatTime(date.getHours()),
        min: formatTime_1.formatTime(date.getMinutes()),
        sec: formatTime_1.formatTime(date.getSeconds())
    };
};
exports.getTime = getTime;
