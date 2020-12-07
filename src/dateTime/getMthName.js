"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMthName = void 0;
const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const getMthName = (date) => monthNames[date.getMonth()];
exports.getMthName = getMthName;
