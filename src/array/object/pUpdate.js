"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pUpdate = void 0;
const update_1 = require("./update");
const ramda_1 = require("ramda");
const errorWrapper_1 = require("../../errorWrapper/errorWrapper");
/**
  * Функция возвращает обновленную коллекцию по переданному пути
  *
  * @category ArrayOfObjects
  * @method
  * @since v0.1.0
  * @param { Array | Object } collection - коллекция в виде массива или объекта
  * @param { Array } keys - путь по которому будет проиходить обновление. Путь массив если следующий шаг объект, то путь имя ключа объекта, либо массив [*String -> имя ключа объекта*, значение]
  * @param { Object } newData - новое значение
  * @return { Array | Object }
  * @example
  *
  * const object = {
  *  quantifying: {
  *    Towels: [
  *      { feed: {}, id: 1 },
  *      { id: 2 },
  *      { id: 3 },
  *      { Chair: "Reyes.Lebsack@hotmail.com", Oklahoma: {}, id: 4 },
  *      { utilize: {}, engage: "747-776-1611", id: 5 }
  *    ],
  *    Electronics: "239-934-8977 x1217",
  *    Assurance: { Configurable: "607-385-4573 x0039" }
  *  }
  * };
  *
  * AOO.pUpdate(object, ["quantifying", "Towels", ["id", 4], "Chair"], * "friend@gmail.com");
  *  //=>
  *   ({
  *    quantifying: {
  *      Towels: [
  *        { feed: {}, id: 1 },
  *        { id: 2 },
  *        { id: 3 },
  *        { Chair: "friend@gmail.com", Oklahoma: {}, id: 4 },
  *        { utilize: {}, engage: "747-776-1611", id: 5 }
  *      ],
  *      Electronics: "239-934-8977 x1217",
  *      Assurance: { Configurable: "607-385-4573 x0039" }
  *    }
  *  });
  *
  * const array = [
  *  {
  *    id: 2,
  *    gnom: 222
  *  },
  *  {
  *    id: 4,
  *    gnom: {
  *      c: [
  *        { id: 1, c: 2 },
  *        { id: 2, b: 2 },
  *        { id: 4, v: 2 }
  *      ],
  *      a: 3
  *    }
  *  }
  * ];
  *
  *   * AOO.pUpdate(array, [["id", 4], "gnom", "c", ["id", 2], "b"], { c:  2, d: 3 });
  *
  * //=>
  *  [
  *    { id: 2, gnom: 222 },
  *    {
  *      id: 4,
  *      gnom: {
  *        c: [
  *          { id: 1, c: 2 },
  *          { id: 2, b: { c: 2, d: 3 } },
  *          { id: 4, v: 2 }
  *        ],
  *        a: 3
  *      }
  *    }
  *  ])
  * };
 */
const pUpdate = (collection, keys, newData, errorMod = false) => {
    let answer = undefined;
    let err = null;
    try {
        answer = ramda_1.cond([
            [() => ramda_1.isEmpty(keys), () => {
                    return newData;
                }],
            [
                (el) => ramda_1.is(Array, el),
                (el) => {
                    const key = keys[0];
                    if (ramda_1.is(Array, key)) {
                        const workArray = el.find((el) => (el[key[0]] === key[1]));
                        return update_1.update(collection, { key: key[0], value: key[1] }, pUpdate(workArray, keys.slice(1), newData));
                    }
                    else {
                        const workArray = el.find((el) => (el[key[0]] === key[1]));
                        return update_1.update(collection, { key: keys[0], value: keys[1] }, pUpdate(workArray, keys.slice(1), newData));
                    }
                }
            ],
            [
                (el) => ramda_1.is(Object, el),
                (el) => {
                    const key = keys[0];
                    return Object.assign(Object.assign({}, el), { [key]: pUpdate(el[key], keys.slice(1), newData) });
                }
            ],
            [ramda_1.T, () => collection]
        ])(collection);
    }
    catch (error) {
        err = error;
    }
    return errorWrapper_1.default(err, answer, errorMod);
};
exports.pUpdate = pUpdate;
