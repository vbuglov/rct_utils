"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapNumMsk = void 0;
/**
  * Функция преобразовывает строку, в строку, в которой содержаться только числа
  * @category masks
  * @method
  * @since v0.1.0
  * @param {string} value - строка которая будет оборачиваться в маску
  * @return {string}
  * @example
  *
  *      const numStr = masks.wrapNumMsk('123abc456'); //=> 123456
  */
const wrapNumMsk = (value) => {
    if (value === '' || !value)
        return '';
    const num = /[0-9]/g;
    //@ts-ignore
    let str = value.match(num).join('');
    if (str) {
        return str;
    }
    return '';
};
exports.wrapNumMsk = wrapNumMsk;
