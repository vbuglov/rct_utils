/**
  * Функция обрезает строку до необходимого количества символов, если в этом есть необходимость
  *
  * @category masks
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @param {number} key - некоторое значение ключа
  * @return {string}
  * @example
  *
  *      masks.lwFirstLett('String') //=> 'string'
  */
declare const lowFirst: (string: string) => string;
export { lowFirst };
