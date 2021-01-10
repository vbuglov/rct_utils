"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepSec = void 0;
const errorWrapper_1 = require("../errorWrapper/errorWrapper");
/**
  * Преобразует секунды в новоую дату от 2000го года
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {number} sec - количество секунд
  * @return {date}
  *
  * @example
  *
  *    const answer = dateTime.prepSec(60);
  *    dateTime.getTime(answer);
  *     // => {
  *        hr: "00",
  *        min: "01",
  *        sec: "00"
  *      };
  */
const prepSec = (sec = 0, errorMod = false) => {
    let answer = undefined;
    let error = null;
    try {
        answer = new Date(+new Date(2000, 0, 0, 0, 0, 0, 0) + sec * 1000);
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(error, answer, errorMod);
};
exports.prepSec = prepSec;
