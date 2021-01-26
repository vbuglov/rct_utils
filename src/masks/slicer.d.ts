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
export declare const slicer: (string: string, length?: number) => string;
