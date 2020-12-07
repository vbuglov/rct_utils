/* eslint-disable import/prefer-default-export */
/**
  * Функция возвращает строку где первый символ становится заглавным
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @return {string}
  * @example
  *
  *      lwFirstLett('string') //=> 'String'
  */
const captlzFrst = (string: string): string => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  const error = `error by func capitalizeFirstLetter, ivalid string. string can't equal ${string}`;
  return error;
}

export { captlzFrst }