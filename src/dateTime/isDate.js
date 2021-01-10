"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
//@ts-nocheck
const ramda_1 = require("ramda");
/**
  * Определяет является ли переменная датой
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - проверяемая дата
  * @return {boolean}
  */
const isDate = (date) => ramda_1.type(date) === "Date";
exports.isDate = isDate;
