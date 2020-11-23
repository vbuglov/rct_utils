"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectCreator = void 0;

var _validators = require("./validators");

var _time_funcs = require("./time_funcs");

var _ramda = require("ramda");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var resolveAdd = (0, _ramda.curry)(function (resolver, obj, el) {
  return (0, _ramda.merge)(obj, _defineProperty({}, el, resolver(el)));
}); // eslint-disable-next-line import/prefer-default-export

var objectCreator = function objectCreator(obj, _ref) {
  var params = _ref.params,
      nonNullable = _ref.nonNullable,
      dates = _ref.dates,
      bigInt = _ref.bigInt,
      phone = _ref.phone,
      booleans = _ref.booleans;
  var resolver = (0, _ramda.cond)([[(0, _validators.hasVal)(obj), function (el) {
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
  }], [_ramda.T, function (el) {
    return obj[el] || null;
  }]]);
  return params.reduce(resolveAdd(resolver), {});
};

exports.objectCreator = objectCreator;