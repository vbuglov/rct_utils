"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const ramda_1 = require("ramda");
/**
  * подготавливает элемент даты к отображению - месяц например
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {number | string} t - элемент даты
  * @return {string}
  */
const formatDate = (t) => ramda_1.inc(t) >= 10 ? ramda_1.inc(t) : `0${ramda_1.inc(t)}`;
exports.formatDate = formatDate;
