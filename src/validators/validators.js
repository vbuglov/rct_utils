"use strict";

exports.__esModule = true;
exports.checkMinMax = exports.validateLength = exports.validateType = exports.validator = exports.emptyArr = exports.isKeysExist = exports.isKeyExist = exports.rejectEmptyNames = exports.checkElementInArr = exports.nilOrEmpty = exports.isEmptyValue = exports.notNilAndNotNan = exports.notUndef = exports.notNil = exports.notNaN = exports.notEmpty = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

const notEmpty = (0, _ramda().compose)(_ramda().not, _ramda().isEmpty);
exports.notEmpty = notEmpty;
const notNaN = (0, _ramda().compose)(_ramda().not, isNaN);
exports.notNaN = notNaN;
const notNil = (0, _ramda().compose)(_ramda().not, _ramda().isNil);
exports.notNil = notNil;

const notUndef = function notUndef(val) {
  return val !== undefined;
};

exports.notUndef = notUndef;
const notNilAndNotNan = (0, _ramda().both)(notNaN, notNil);
exports.notNilAndNotNan = notNilAndNotNan;
const isEmptyValue = (0, _ramda().compose)(_ramda().isEmpty, _ramda().trim);
exports.isEmptyValue = isEmptyValue;
const nilOrEmpty = (0, _ramda().either)(_ramda().isEmpty, _ramda().isNil);
exports.nilOrEmpty = nilOrEmpty;
const checkElementInArr = (0, _ramda().curry)(function (arr, el) {
  return (0, _ramda().both)(isArr, isInArr(el))(arr);
});
exports.checkElementInArr = checkElementInArr;
const rejectEmptyNames = (0, _ramda().reject)(function (el) {
  return (0, _ramda().isNil)(el) || (0, _ramda().isNil)(el.name);
});
exports.rejectEmptyNames = rejectEmptyNames;

const isKeyExist = function isKeyExist(key, obj) {
  return !!obj[key];
};

exports.isKeyExist = isKeyExist;

const isKeysExist = function isKeysExist(keys, obj) {
  return keys.reduce(function (res, key) {
    return isKeyExist(key, obj) && res;
  }, true);
};

exports.isKeysExist = isKeysExist;
const emptyArr = (0, _ramda().both)(isArr, _ramda().isEmpty);
exports.emptyArr = emptyArr;
const resolveAdd = (0, _ramda().curry)(function (resolver, obj, el) {
  return (0, _ramda().merge)(obj, resolver(el));
});

const validator = function validator(obj, params) {
  if (!obj || !params) return obj;

  const validateNonNullable = function validateNonNullable() {
    return params.nonNullable.reduce(function (acc, el) {
      return !obj[el] ? (0, _ramda().merge)(acc, {
        [el]: 'Необходимый параметр'
      }) : acc;
    }, {});
  };

  const validateTypes = function validateTypes() {
    return params.types.reduce(function (acc, el) {
      const val = validateType(obj[el.name], el.type);
      return val ? (0, _ramda().merge)(acc, {
        [el.name]: val
      }) : acc;
    }, {});
  };

  const resolver = (0, _ramda().cond)([[(0, _ramda().equals)('nonNullable'), validateNonNullable], [(0, _ramda().equals)('types'), validateTypes], [(0, _ramda().equals)('length'), function (_ref) {
    let {
      length,
      name
    } = _ref;
    return validateLength(obj[name], length);
  }], [_ramda().T, function () {
    return obj;
  }]]);
  return Object.keys(params).reduce(resolveAdd(resolver), {});
};

exports.validator = validator;

const validateType = function validateType(val, type) {
  return (0, _ramda().cond)([[(0, _ramda().equals)('number'), function () {
    return !isNumber(val) && 'числовое значение';
  }], [(0, _ramda().equals)('object'), function () {
    return !isObject && 'не верное значение';
  }], [_ramda().T, (0, _ramda().always)(false)]])(type);
};

exports.validateType = validateType;

const validateLength = function validateLength(val, length) {
  return (0, _ramda().cond)([[isKeyExist('equals'), function (_ref2) {
    let {
      equals
    } = _ref2;
    return val.length !== equals && "".concat(equals, " \u0441\u0438\u043C\u0432.");
  }], [isKeyExist('strict'), function (_ref3) {
    let {
      min,
      max
    } = _ref3;
    return checkMinMax({
      l: val.length,
      min: min && min + 1,
      max: max && max - 1
    });
  }], [isKeyExist('min') || isKeyExist('max'), function (_ref4) {
    let {
      min,
      max
    } = _ref4;
    return checkMinMax({
      l: val.length,
      min,
      max
    });
  }], [_ramda().T, (0, _ramda().always)(false)]])(length);
};

exports.validateLength = validateLength;

const checkMinMax = function checkMinMax(params) {
  return (0, _ramda().cond)([[isKeysExist(['min', 'max']), function (_ref5) {
    let {
      l,
      min,
      max
    } = _ref5;
    return !(l <= max && l >= min) && "\u041E\u0442 ".concat(min, " \u0434\u043E ").concat(max, " \u0441\u0438\u043C\u0432.");
  }], [isKeyExist('min'), function (_ref6) {
    let {
      l,
      min
    } = _ref6;
    return !(l >= min) && "\u041C\u0438\u043D. ".concat(min, " \u0441\u0438\u043C\u0432");
  }], [isKeyExist('max'), function (_ref7) {
    let {
      l,
      max
    } = _ref7;
    return !(l <= max) && "\u041C\u0430\u043A\u0441. ".concat(max, " \u0441\u0438\u043C\u0432.");
  }], [_ramda().T, (0, _ramda().always)(null)]])(params);
};

exports.checkMinMax = checkMinMax;