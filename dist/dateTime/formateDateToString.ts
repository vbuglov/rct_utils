import { isDate } from './isDate'

/**
  * Преобразует дату в строку
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {string}
  */

const formateDateToString = (date: any) => isDate(date) && date.toLocaleString();

export { formateDateToString };