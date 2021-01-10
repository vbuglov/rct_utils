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
  *   encrypt("hellow world", "1234");
  *      //=> 597bb12abd77e8d8791065c5  
  * 
  *   encrypt("кулак", "types");
  *      //=> ee5304e969f485ee857a   
  */

const encrypt = curry((text: string, key: string, errorMod = false): string | iError => {
  let answer: any = undefined;
  let error: any = null;
  try {
    const newKey = slice(0, 16, parseKey(key));
    const textBytes = aesjs.utils.utf8.toBytes(text);
    const aesCtr = new aesjs.ModeOfOperation.ctr(newKey, new aesjs.Counter(7));
    const encryptedBytes = aesCtr.encrypt(textBytes);
    answer = aesjs.utils.hex.fromBytes(encryptedBytes);
  } catch (err) {
    error = err;
  }
  return errorWrapper(error, answer, errorMod)
});

export { encrypt }