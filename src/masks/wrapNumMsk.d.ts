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
export declare const wrapNumMsk: (value: string) => string;
