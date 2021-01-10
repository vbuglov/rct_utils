/**
  * Преобразует время к формату с двумя символами
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {date} date - текст который будет зашифрован
  * @return {date}
  */
declare const getDate: (date: any) => {
    mth: string | number;
    day: any;
    year: any;
};
export { getDate };
