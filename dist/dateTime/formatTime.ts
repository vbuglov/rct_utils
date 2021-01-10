/**
  * Преобразует время к формату с двумя символами
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {string} t - текст который будет зашифрован
  * @return {string}
  */
const formatTime = (t: any) => (`0${t}`).slice(-2);

export { formatTime };