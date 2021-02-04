"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const getDateByType_1 = require("./getDateByType");
const parse = (date = new Date(), symbol = '.', mode = 'DateDMY') => {
    const selfDate = getDateByType_1.getDateByType(date);
    let dateBits = {
        year: selfDate.getFullYear(),
        month: selfDate.getMonth() + 1,
        day: selfDate.getDate(),
        hours: selfDate.getHours(),
        minutes: selfDate.getMinutes(),
        seconds: selfDate.getSeconds()
    };
    Object.keys(dateBits).forEach((key) => {
        //@ts-ignore
        if (dateBits[key] < 10)
            dateBits[key] = '0' + dateBits[key];
    });
    switch (mode) {
        case 'DMY':
            return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
        case 'DM':
            return dateBits.day + symbol + dateBits.month;
        case 'YMD':
            return dateBits.year + symbol + dateBits.month + symbol + dateBits.day;
        case 'DMYHM':
            return (dateBits.day +
                symbol +
                dateBits.month +
                symbol +
                dateBits.year +
                ' ' +
                dateBits.hours +
                ':' +
                dateBits.minutes);
        case 'YMDHM':
            return (dateBits.year +
                symbol +
                dateBits.month +
                symbol +
                dateBits.day +
                ' ' +
                dateBits.hours +
                ':' +
                dateBits.minutes);
        case 'HMS':
            return (dateBits.hours +
                ':' +
                dateBits.minutes +
                ':' +
                dateBits.seconds);
        case 'HM':
            return dateBits.hours + ':' + dateBits.minutes;
        default:
            return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
    }
};
exports.parse = parse;
