/**
 * Функция проверяет объект ли переменная.
 * @category validators
 * @method
 * @since v0.1.0
 * @param {(*)} key - проверяемая переменная
 * @return {boolean}
 *
 * @example
 *
 *      isObject(12);      //=> false
 *      isObject({});      //=> true
 */
export declare const isObject: (val: any) => boolean;
