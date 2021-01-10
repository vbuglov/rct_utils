"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formateDateToString = void 0;
const isDate_1 = require("./isDate");
/**
  * Преобразует дату в строку
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {string}
  */
const formateDateToString = (date) => isDate_1.isDate(date) && date.toLocaleString();
exports.formateDateToString = formateDateToString;
