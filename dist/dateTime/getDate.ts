import { formatDate } from './formatDate'

const getDate = (date: any) => {
  date = new Date(date)
  return {
    mth: formatDate(date.getMonth()),
    day: date.getDate(),
    year: date.getFullYear()
  }
}

export { getDate }