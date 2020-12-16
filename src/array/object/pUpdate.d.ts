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
declare const pUpdate: (collection: any, keys: any[], newData: any, errorMod?: boolean) => any;
export { pUpdate };
