"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMthName = void 0;
const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
/**
  * Получает название текущего месяца
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {string}
  */
const getMthName = (date) => monthNames[date.getMonth()];
exports.getMthName = getMthName;
