import { isDate } from './isDate'

const formateDateToString = (date: any) => isDate(date) && date.toLocaleString();

export { formateDateToString };