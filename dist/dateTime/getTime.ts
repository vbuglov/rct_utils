import { formatTime } from './formatTime';

const getTime = (date: any) => {
  date = new Date(date)
  return {
    hr: formatTime(date.getHours()),
    min: formatTime(date.getMinutes()),
    sec: formatTime(date.getSeconds())
  }
};

export { getTime };