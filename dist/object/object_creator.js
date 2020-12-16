import { checkElementInArr, hasVal } from './validators';
import { formateDateToString } from './time_funcs';
import { cond, T, curry, merge } from 'ramda';

/**
 *
 * @param obj         - базовый объект
 * @param params      - список параметров
 * @param nonNullable - запрет на замену на null
 * @param dates       - переформатирует дату в строку нужного вида
 * @param bigInt      - чтобы избежать ошибок с числами с более чем 8 порядка
 * @param phone       - оставляет только числа
 * @param booleans    - возвращает либо пришедший boolean либо false
 * @param default    - возвращает значение или null
 *
 * @description Обязательно! имя параметра дожно совпадать с именем параметра объекта
 * Проверяет параметры и, при необходимости подставляет недостающие значения (null)
 * сond - функция из ramda - первый элемент условие - второй способ обработки
 * таким образом для доп валидации достаточно добавить функцию проверки и обработки
 */

const resolveAdd = curry((resolver, obj, el) => merge(obj, { [el]: resolver(el) }));

// eslint-disable-next-line import/prefer-default-export
export const objectCreator = (obj, { params, nonNullable, dates, bigInt, phone, booleans }) => {
  const resolver = cond([
      [hasVal(obj), (el) => +obj[el].value],
      [checkElementInArr(bigInt), (el) => `${obj[el]}`],
      [checkElementInArr(dates), (el) => formateDateToString(obj[el]) || null],
      [checkElementInArr(nonNullable), (el) => obj[el]],
      [checkElementInArr(phone), (el) => obj[el].replace(/\D/gm, '')],
      [checkElementInArr(booleans), (el) => obj[el] || false],
      [T, (el) => obj[el] || null]
    ])

  return params.reduce(resolveAdd(resolver), {})
};
