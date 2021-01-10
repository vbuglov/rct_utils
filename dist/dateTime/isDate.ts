//@ts-nocheck
import { type } from 'ramda';

/**
  * Определяет является ли переменная датой
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - проверяемая дата
  * @return {boolean}
  */

const isDate = (date: any): boolean => type(date) === "Date";

export { isDate }