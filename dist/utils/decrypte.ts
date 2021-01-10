//@ts-ignore
import aesjs from "aes-js";
import { slice, curry } from "ramda";
import { parseKey } from "./parseKey";
import errorWrapper from '../errorWrapper/errorWrapper';
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

const decrypte = curry((encryptedHex: string, key: string, errorMod = false): string | iError => {
  let answer: any = undefined;
  let error: any = null;
  try {
    const newKey = slice(0, 16, parseKey(key));
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    const aesCtr = new aesjs.ModeOfOperation.ctr(newKey, new aesjs.Counter(7));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    answer = aesjs.utils.utf8.fromBytes(decryptedBytes);
  } catch (err) {
    error = err;
  }
  return errorWrapper(error, answer, errorMod)
});

export { decrypte }