/// <reference types="ts-toolbelt" />
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
declare const addHours: import("Function/Curry").Curry<(date?: Date, h?: number, errMod?: any) => any>;
export { addHours };
