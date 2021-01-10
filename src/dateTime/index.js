"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTime = void 0;
const addHours_1 = require("./addHours");
const formatDate_1 = require("./formatDate");
const formateDateToString_1 = require("./formateDateToString");
const formatTime_1 = require("./formatTime");
const getDate_1 = require("./getDate");
const isDate_1 = require("./isDate");
const reformate_1 = require("./reformate");
const prepSec_1 = require("./prepSec");
const getTime_1 = require("./getTime");
exports.dateTime = {
    addHours: addHours_1.addHours,
    formatDate: formatDate_1.formatDate,
    formateDateToString: formateDateToString_1.formateDateToString,
    formatTime: formatTime_1.formatTime,
    getDate: getDate_1.getDate,
    getTime: getTime_1.getTime,
    isDate: isDate_1.isDate,
    reformate: reformate_1.reformate,
    prepSec: prepSec_1.prepSec
};
