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
        case 'DateDMY':
            return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
        case 'DateDM':
            return dateBits.day + symbol + dateBits.month;
        case 'DateYMD':
            return dateBits.year + symbol + dateBits.month + symbol + dateBits.day;
        case 'DateDMYHM':
            return (dateBits.day +
                symbol +
                dateBits.month +
                symbol +
                dateBits.year +
                ' ' +
                dateBits.hours +
                ':' +
                dateBits.minutes);
        case 'DateYMDHM':
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
        case 'DateHM':
            return dateBits.hours + ':' + dateBits.minutes;
        default:
            return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
    }
};
exports.parse = parse;
