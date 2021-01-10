/// <reference types="ts-toolbelt" />
import { iError } from '../errorWrapper/errorWrapper';
/**
  * Функция принимает строку и ключ и возвращает зишифрованный хэш
  *
  * @category utils
  * @method
  * @since v0.1.0
  * @param {string} text - текст который будет зашифрован
  * @param {string} key - ключ для текста
  * @return {string[]}
  * @example
  *
  *   decrypte("597bb12abd77e8d8791065c5", "1234");
  *      //=> hellow world
  *
  *   decrypte("ee5304e969f485ee857a", "types");
  *      //=> кулак
  */
declare const decrypte: import("Function/Curry").Curry<(encryptedHex: string, key: string, errorMod?: any) => string | iError>;
export { decrypte };
