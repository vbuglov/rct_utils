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
declare const parse: (date?: Date, symbol?: string, mode?: string) => string;
export { parse };
