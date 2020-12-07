import { cond, equals, T } from 'ramda';
import { getTime } from './getTime'
import { getDate } from './getDate'
import { getMthName } from './getMthName'

export const reformate = (date: any, format: never) =>
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
  ])(format);