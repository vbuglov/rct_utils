/**
 * Функция возвращает массив значений ключей из аналогичных объектов по названию ключа.
 *
 * @category ArrayOfObjects
 * @method
 * @since v0.1.0
 * @param {Array} array - массив в котором ведёться поиск
 * @param {string} key - некоторое значение ключа
 * @return {Array} - values[]
 *
 * @example
 *
 *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
 *      arrToVal(newArray, "foo");      //=> ["hello", "bye"]
 */
declare const findValues: (array: any[], key: string) => string[] | null;
export { findValues };
