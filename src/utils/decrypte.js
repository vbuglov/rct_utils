"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypte = void 0;
//@ts-ignore
const aes_js_1 = require("aes-js");
const ramda_1 = require("ramda");
const parseKey_1 = require("./parseKey");
const errorWrapper_1 = require("../errorWrapper/errorWrapper");
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
const decrypte = ramda_1.curry((encryptedHex, key, errorMod = false) => {
    let answer = undefined;
    let error = null;
    try {
        const newKey = ramda_1.slice(0, 16, parseKey_1.parseKey(key));
        const encryptedBytes = aes_js_1.default.utils.hex.toBytes(encryptedHex);
        const aesCtr = new aes_js_1.default.ModeOfOperation.ctr(newKey, new aes_js_1.default.Counter(7));
        const decryptedBytes = aesCtr.decrypt(encryptedBytes);
        answer = aes_js_1.default.utils.utf8.fromBytes(decryptedBytes);
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(error, answer, errorMod);
});
exports.decrypte = decrypte;
