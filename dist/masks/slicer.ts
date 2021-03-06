/* eslint-disable import/prefer-default-export */
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
  *      masks.slicer("hellow world", 3)
*       // => "hel"
  */
export const slicer = (string: string, length = 40) => {
  if (string && string.length > length) {
    return `${string.substring(0, length)}...`;
  }
  return string;
}
