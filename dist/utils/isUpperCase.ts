import { is } from 'ramda';
import errorWrapper from '../errorWrapper/errorWrapper';

/**
  * Проверяет находится ли строка или символ в верхнем регистре
  *
  * @category utils
  * @method
  * @since v0.1.0
  * @param {string} str - преверяемая строка
  * @return {boolean}
  */

const isUpperCase = (str: string, errorMod = false) => {
  if (!is(String, str)) return false;
  let answer: any = undefined;
  let error: any = null;
  try {
    answer = str.toUpperCase() === str;
  } catch (err) {
    error = err;
  }
  return errorWrapper(error, answer, errorMod)
}

export { isUpperCase };