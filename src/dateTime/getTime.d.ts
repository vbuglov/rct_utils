/**
  * распределяет дату в объект - час минута секунда
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {object}
  */
declare const getTime: (date: any) => {
    hr: string;
    min: string;
    sec: string;
};
export { getTime };
