/**
  * Функция преобразовывает строку, в строку, в которой содержаться только числа
  * @category mask
  * @method
  * @since v0.1.0
  * @param {string} value - строка которая будет оборачиваться в маску
  * @return {string}
  * @example
  *
  *      const numStr = wrapNumMsk('123abc456'); //=> 123456
  */
export const wrapNumMsk = (value: string): string => {
  if (value === '' || !value) return '';
  const num = /[0-9]/g;
  //@ts-ignore
  let str = value.match(num).join('');
  if (str) {
    return str;
  }
  return '';
}
