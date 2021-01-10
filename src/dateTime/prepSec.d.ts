import { iError } from "../errorWrapper/errorWrapper";
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
  *     // =>
  *      {
  *        hr: "00",
  *        min: "01",
  *        sec: "00"
  *      };
  */
declare const prepSec: (sec?: number, errorMod?: boolean) => Date | iError;
export { prepSec };
