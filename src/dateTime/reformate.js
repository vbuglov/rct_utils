"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reformate = void 0;
const ramda_1 = require("ramda");
const getTime_1 = require("./getTime");
const getDate_1 = require("./getDate");
const getMthName_1 = require("./getMthName");
/**
  * преобразовывает дату в строку по указанному формату
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @param {string} format - текст который будет зашифрован
  * @return {string}
  */
const reformate = (date, format) => ramda_1.cond([
    [ramda_1.equals('time-only'), () => {
            const { hr, min, sec } = getTime_1.getTime(date);
            return `${hr}:${min}:${sec}`;
        }],
    [ramda_1.equals('date-only'), () => {
            const { day, mth, year } = getDate_1.getDate(date);
            return `${day}/${mth}/${year}`;
        }],
    [ramda_1.equals('date-report'), () => {
            const { day, mth, year } = getDate_1.getDate(date);
            return `${year}-${mth}-${day}`;
        }],
    [ramda_1.equals('mth-date-report'), () => {
            date = new Date(date);
            return `${getMthName_1.getMthName(date)} ${date.getDate()}`;
        }],
    [ramda_1.T, () => {
            const { hr, min, sec } = getTime_1.getTime(date);
            const { day, mth, year } = getDate_1.getDate(date);
            return `${day}/${mth}/${year} ${hr}:${min}:${sec}`;
        }]
])(format);
exports.reformate = reformate;
