import { curry } from "ramda";
import errorWrapper from "../errorWrapper/errorWrapper";

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


const addHours = curry((date: Date = new Date(), h: number = 0, errMod = false) => {
  let answer: any = undefined;
  let error: any = null;
  try {
    answer = date.setHours(date.getHours() + h);
  } catch (err) {
    error = err;
  }
  return errorWrapper(error, answer, errMod);
});

export { addHours };