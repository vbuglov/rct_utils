import { inc, type, cond, equals, T } from 'ramda';
import { notNilAndNotNan } from './validators';

export const isDate = (date) => type(date) === 'Date';
export const formateDateToString = (date) => isDate(date) && date.toLocaleString();

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const reformateDateString = (date, format = 'full') => notNilAndNotNan(date) ? reformate(date, format) : null;

const reformate = (date, format) =>
  cond([
    [equals('time-only'), () => {
      const { hr, min, sec } = getTime(date)
      return `${hr}:${min}:${sec}`;
    }],
    [equals('date-only'), () => {
      const { day, mth, year } = getDate(date)
      return `${day}/${mth}/${year}`;
    }],
    [equals('date-report'), () => {
      const { day, mth, year } = getDate(date)
      return `${year}-${mth}-${day}`
    }],
    [equals('mth-date-report'), () => {
      date = new Date(date)
      return `${getMthName(date)} ${date.getDate()}`
    }],
    [T, () => {
      const { hr, min, sec } = getTime(date)
      const { day, mth, year } = getDate(date)
      return `${day}/${mth}/${year} ${hr}:${min}:${sec}`;
    }]
  ])(format)

export const addHours = (date, h) => {
  date.setHours(date.getHours() + h);
  return date;
};

const getTime = (date) => {
  date = new Date(date)
  return {
    hr: formatTime(date.getHours()),
    minutes: formatTime(date.getMinutes()),
    sec: formatTime(date.getSeconds())
  }
};

const getDate = (date) => {
  date = new Date(date)
  return {
    mth: formatDate(date.getMonth()),
    day: date.getDate(),
    year: date.getFullYear()
  }
}

export const getMthName = (date) => monthNames[date.getMonth()]
export const formatDate = (t) => inc(t) >= 10 ? inc(t) : `0${inc(t)}`
export const formatTime = (t) => (`0${t}`).slice(-2)
