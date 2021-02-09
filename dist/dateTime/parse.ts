import { getDateByType } from './getDateByType';

/**
  * Преобразовывает дату в строку по указанному формату. Все
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date | string} date - дата которую нужно привести к нужному виду
  * @param {string} symbol - разделитель для даты
  * @param {string} mode - мод для преобразования даты, по умоляанию "DMY"
  * @param {string} tSeparator - разделитель для времени
  * @return {string}
  */


const parse = (date = new Date(), symbol = '.', mode = 'DMY') => {
  const selfDate = getDateByType(date);
  let dateBits = {
    year: selfDate.getFullYear(),
    month: selfDate.getMonth() + 1,
    day: selfDate.getDate(),
    hours: selfDate.getHours(),
    minutes: selfDate.getMinutes(),
  };
  Object.keys(dateBits).forEach((key) => {
    //@ts-ignore
    if (dateBits[key] < 10) dateBits[key] = '0' + dateBits[key];
  });
  switch (mode) {
    case 'DMY':
      return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
    case 'DM':
      return dateBits.day + symbol + dateBits.month;
    case 'YMD':
      return dateBits.year + symbol + dateBits.month + symbol + dateBits.day;
    case 'DMYHM':
      return (
        dateBits.day +
        symbol +
        dateBits.month +
        symbol +
        dateBits.year +
        ' ' +
        dateBits.hours +
        ':' +
        dateBits.minutes
      );
    case 'YMDHM':
      return (
        dateBits.year +
        symbol +
        dateBits.month +
        symbol +
        dateBits.day +
        ' ' +
        dateBits.hours +
        ':' +
        dateBits.minutes
      );
    case 'HM':
      return dateBits.hours + ':' + dateBits.minutes;
    default:
      return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
  }
};

export { parse };