"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = void 0;
const formatDate_1 = require("./formatDate");
/**
  * Преобразует время к формату с двумя символами
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {date}
  */
const getDate = (date) => {
    date = new Date(date);
    return {
        mth: formatDate_1.formatDate(date.getMonth()),
        day: date.getDate(),
        year: date.getFullYear()
    };
};
exports.getDate = getDate;
