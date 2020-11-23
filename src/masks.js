"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapNumMsk = void 0;

/**
  * Функция преобразовывает строку, в строку, в которой содержаться только числа
  * 
  * @category Masks
  * @method
  * @since v0.1.0
  * @param {string} value - строка которая будет оборачиваться в маску
  * @return {string}
  * 
  * @example
  *
  *      const numStr = wrapNumMsk('123abc456'); //=> 123456
  */
var wrapNumMsk = function wrapNumMsk(value) {
  if (value === '') return '';
  var str = '';
  var num = /[0-9]/g;
  if (value) str = value.match(num);

  if (str) {
    str = str.join('');
    return str;
  }

  return '';
};

exports.wrapNumMsk = wrapNumMsk;