"use strict";

exports.__esModule = true;
exports.objectCreator = void 0;

var _validators = require("./validators");

var _time_funcs = require("./time_funcs");

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

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
const resolveAdd = (0, _ramda().curry)(function (resolver, obj, el) {
  return (0, _ramda().merge)(obj, {
    [el]: resolver(el)
  });
}); // eslint-disable-next-line import/prefer-default-export

const objectCreator = function objectCreator(obj, _ref) {
  let {
    params,
    nonNullable,
    dates,
    bigInt,
    phone,
    booleans
  } = _ref;
  const resolver = (0, _ramda().cond)([[(0, _validators.hasVal)(obj), function (el) {
    return +obj[el].value;
  }], [(0, _validators.checkElementInArr)(bigInt), function (el) {
    return "".concat(obj[el]);
  }], [(0, _validators.checkElementInArr)(dates), function (el) {
    return (0, _time_funcs.formateDateToString)(obj[el]) || null;
  }], [(0, _validators.checkElementInArr)(nonNullable), function (el) {
    return obj[el];
  }], [(0, _validators.checkElementInArr)(phone), function (el) {
    return obj[el].replace(/\D/gm, '');
  }], [(0, _validators.checkElementInArr)(booleans), function (el) {
    return obj[el] || false;
  }], [_ramda().T, function (el) {
    return obj[el] || null;
  }]]);
  return params.reduce(resolveAdd(resolver), {});
};

exports.objectCreator = objectCreator;