import { inc } from 'ramda';

/**
  * подготавливает элемент даты к отображению - месяц например
  *
  * @category dateTime
  * @method
  * @since v0.1.0
  * @param {number | string} t - элемент даты
  * @return {string}
  */

const formatDate = (t: any) => inc(t) >= 10 ? inc(t) : `0${inc(t)}`

export { formatDate };