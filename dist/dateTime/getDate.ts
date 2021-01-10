import { formatDate } from './formatDate'

/**
  * Преобразует время к формату с двумя символами
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {date}
  */

const getDate = (date: any) => {
  date = new Date(date)
  return {
    mth: formatDate(date.getMonth()),
    day: date.getDate(),
    year: date.getFullYear()
  }
}

export { getDate }