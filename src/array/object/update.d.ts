export interface iAooParam {
    key: string;
    value: any;
}
/**
  * Функция возвращает массив значений ключей из аналогичных объектов по названию ключа.
  *
  * @category ArrayOfObjects
  * @method
  * @since v0.1.0
  * @param { Array } aoo - Array of Objects
  * @param { Number | iAooParam } param - число или {key: string, value: any}
  * @param { Object } obj - новое значение на которое будет заменен элемент в массиве
  * @return { Array }
  * @example
  *
  * const array = [
  *  { id: 64, name: "42942-5693", county: "Borders" },
  *  { id: 4, name: "23465-7870", county: "Berkshire" },
  *  { id: 13, name: "19616-0095", county: "Cambridgeshire" },
  *  { id: 31, name: "79350", county: "Berkshire" }
  * ];
  *
  * AOO.update(array, { key: 'id', value: 4 }, {
  *    id: 5, name: "23123-22", county: "Berkshire", address: "gh#21-2"
  *  });
  *
  * //=> [
  *        { id: 64, name: "42942-5693", county: "Borders" },
  *        { id: 5, name: "23123-22", county: "Berkshire", address: "gh#21-2"
  *        },
  *        { id: 13, name: "19616-0095", county: "Cambridgeshire" },
  *        { id: 31, name: "79350", county: "Berkshire" }
  *      ]
  *
 */
declare const update: (aoo: any[], param: Number | iAooParam, obj: any, errorMod?: boolean) => any[];
export { update };
