"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHours = void 0;
const ramda_1 = require("ramda");
const errorWrapper_1 = require("../errorWrapper/errorWrapper");
/**
  * Добавляет указанное количество часов к дате
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @param {number} h - ключ для текста
  * @return {date}
  * @example
  *
  *   const answer = pipe(
  *      dateTime.prepSec,
  *      (date) => dateTime.addHours(date, 2),
  *      dateTime.getTime
  *    )(7200)
  *      //=>
  *     {
  *        hr: "04",
  *        min: "00",
  *        sec: "00"
  *     }
  *
  */
const addHours = ramda_1.curry((date = new Date(), h = 0, errMod = false) => {
    let answer = undefined;
    let error = null;
    try {
        answer = date.setHours(date.getHours() + h);
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(error, answer, errMod);
});
exports.addHours = addHours;
