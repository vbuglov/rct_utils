/* eslint-disable quotes */
import { type } from 'ramda'
/* eslint-disable import/prefer-default-export */
/**
  * Функция обрезает строку до необходимого количества символов, если в этом есть необходимость
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @param {number} key - некоторое значение ключа
  * @return {string}
  * @example
  *
  *      lwFirstLett('String') //=> 'string'
  */
const lowFirst = (string: string): string => {
  if (string && string[0] && type(string) === "String") return string[0].toLowerCase() + string.slice(1);

  const error = `error by func lowerFirstLetter, ivalid string. string can't equal ${string}`
  return error;
};

export { lowFirst };