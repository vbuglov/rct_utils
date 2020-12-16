import { is, cond, T, isEmpty } from "ramda";
import errorWrapper from '../../errorWrapper/errorWrapper';


/**
  * Функция возвращаем элемент по заданному пути
  *
  * @category ArrayOfObjects
  * @method
  * @since v0.1.0
  * @param { Array | Object } collection - коллекция в виде массива или объекта
  * @param { Number | iAooParam } keys - Путь по которому будет происходить поиск. Путь - массив если следующий шаг объект, то путь имя ключа объекта, либо массив [*String -> имя ключа объекта*, значение]
  * @return { any }
  * @example
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
  * AOO.paths(array, [["id", 4], "name"]);
  * //=> "23465-7870"
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
  * AOO.paths(object, ['quantifying', 'Towels', ['id', 4], 'Chair']);
  * //=>  "Reyes.Lebsack@hotmail.com"
  });
});
  * 
 */
const paths = (collection: any, keys: any[], errorMod: boolean = false): any => {
  let answer: any = undefined;
  let err: any = null;
  try {
    answer = cond([
      [() => isEmpty(keys), () => collection],
      [
        (el) => is(Array, el),
        (el) => {
          const key = keys[0];
          if (is(Array, key)) {
            const item = el.find((obj: any) => obj[key[0]] === key[1]);
            return paths(item, keys.slice(1));
          }
          return paths(el[key], keys.slice(1));
        }
      ],
      [
        (el) => is(Object, el),
        (el) => {
          const key = keys[0];
          return paths(el[key], keys.slice(1));
        }
      ],
      [T, () => collection]
    ])(collection);
  } catch (error) {
    error = error;
  }
  return errorWrapper(err, answer, errorMod);
};

export { paths };