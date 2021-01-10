/**
  * Функция преобразует строку в массив для 16bit кодировщика
  *
  * @category utils
  * @method
  * @since v0.1.0
  * @param {string} key - ключ
  * @return {string[]}
  * @example
  *
  *   parseKey('1');
  *      //=> [49,113,119,101,114,116,121,117,105,111,112,97,115,100,102,103,104]
  *
  *   parseKey('secret');
  *      //=> [115,101,99,114,101,116,113,119,101,114,116,121,117,105,111,112,97,115,100,102,103,104]
  */
declare const parseKey: (key: string) => number[];
export { parseKey };
