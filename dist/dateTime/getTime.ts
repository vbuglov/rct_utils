import { formatTime } from './formatTime';

/**
  * распределяет дату в объект - час минута секунда
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {object}
  */

const getTime = (date: any) => {
  date = new Date(date)
  return {
    hr: formatTime(date.getHours()),
    min: formatTime(date.getMinutes()),
    sec: formatTime(date.getSeconds())
  }
};

export { getTime };