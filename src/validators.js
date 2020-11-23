"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMinMax = exports.validateLength = exports.validateType = exports.validator = exports.emptyArr = exports.isKeysExist = exports.isKeyExist = exports.rejectEmptyNames = exports.checkElementInArr = exports.nilOrEmpty = exports.isEmptyValue = exports.notNilAndNotNan = exports.notUndef = exports.notNil = exports.notNaN = exports.notEmpty = exports.hasVal = exports.isInArr = exports.isNumber = exports.isString = exports.isArr = exports.isObject = exports.isNaN = void 0;

var _ramda = require("ramda");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isNaN = (0, _ramda.is)(NaN);
exports.isNaN = isNaN;
var isObject = (0, _ramda.is)(Object);
exports.isObject = isObject;
var isArr = (0, _ramda.is)(Array);
exports.isArr = isArr;
var isString = (0, _ramda.is)(String);
exports.isString = isString;
var isNumber = (0, _ramda.both)((0, _ramda.is)(Number), (0, _ramda.complement)((0, _ramda.equals)(NaN)));
exports.isNumber = isNumber;
var isInArr = (0, _ramda.curry)(function (el, arr) {
  return arr.findIndex(function (arrEl) {
    return arrEl === el;
  }) >= 0;
});
exports.isInArr = isInArr;
var hasVal = (0, _ramda.curry)(function (obj, el) {
  return !!obj[el] && !!obj[el].value;
});
exports.hasVal = hasVal;
var notEmpty = (0, _ramda.compose)(_ramda.not, _ramda.isEmpty);
exports.notEmpty = notEmpty;
var notNaN = (0, _ramda.compose)(_ramda.not, isNaN);
exports.notNaN = notNaN;
var notNil = (0, _ramda.compose)(_ramda.not, _ramda.isNil);
exports.notNil = notNil;

var notUndef = function notUndef(val) {
  return val !== undefined;
};

exports.notUndef = notUndef;
var notNilAndNotNan = (0, _ramda.both)(notNaN, notNil);
exports.notNilAndNotNan = notNilAndNotNan;
var isEmptyValue = (0, _ramda.compose)(_ramda.isEmpty, _ramda.trim);
exports.isEmptyValue = isEmptyValue;
var nilOrEmpty = (0, _ramda.either)(_ramda.isEmpty, _ramda.isNil);
exports.nilOrEmpty = nilOrEmpty;
var checkElementInArr = (0, _ramda.curry)(function (arr, el) {
  return (0, _ramda.both)(isArr, isInArr(el))(arr);
});
exports.checkElementInArr = checkElementInArr;
var rejectEmptyNames = (0, _ramda.reject)(function (el) {
  return (0, _ramda.isNil)(el) || (0, _ramda.isNil)(el.name);
});
exports.rejectEmptyNames = rejectEmptyNames;

var isKeyExist = function isKeyExist(key, obj) {
  return !!obj[key];
};

exports.isKeyExist = isKeyExist;

var isKeysExist = function isKeysExist(keys, obj) {
  return keys.reduce(function (res, key) {
    return isKeyExist(key, obj) && res;
  }, true);
};

exports.isKeysExist = isKeysExist;
var emptyArr = (0, _ramda.both)(isArr, _ramda.isEmpty);
exports.emptyArr = emptyArr;
var resolveAdd = (0, _ramda.curry)(function (resolver, obj, el) {
  return (0, _ramda.merge)(obj, resolver(el));
});

var validator = function validator(obj, params) {
  if (!obj || !params) return obj;

  var validateNonNullable = function validateNonNullable() {
    return params.nonNullable.reduce(function (acc, el) {
      return !obj[el] ? (0, _ramda.merge)(acc, _defineProperty({}, el, 'Необходимый параметр')) : acc;
    }, {});
  };

  var validateTypes = function validateTypes() {
    return params.types.reduce(function (acc, el) {
      var val = validateType(obj[el.name], el.type);
      return val ? (0, _ramda.merge)(acc, _defineProperty({}, el.name, val)) : acc;
    }, {});
  };

  var resolver = (0, _ramda.cond)([[(0, _ramda.equals)('nonNullable'), validateNonNullable], [(0, _ramda.equals)('types'), validateTypes], [(0, _ramda.equals)('length'), function (_ref) {
    var length = _ref.length,
        name = _ref.name;
    return validateLength(obj[name], length);
  }], [_ramda.T, function () {
    return obj;
  }]]);
  return Object.keys(params).reduce(resolveAdd(resolver), {});
};

exports.validator = validator;

var validateType = function validateType(val, type) {
  return (0, _ramda.cond)([[(0, _ramda.equals)('number'), function () {
    return !isNumber(val) && 'числовое значение';
  }], [(0, _ramda.equals)('object'), function () {
    return !isObject && 'не верное значение';
  }], [_ramda.T, (0, _ramda.always)(false)]])(type);
};

exports.validateType = validateType;

var validateLength = function validateLength(val, length) {
  return (0, _ramda.cond)([[isKeyExist('equals'), function (_ref2) {
    var equals = _ref2.equals;
    return val.length !== equals && "".concat(equals, " \u0441\u0438\u043C\u0432.");
  }], [isKeyExist('strict'), function (_ref3) {
    var min = _ref3.min,
        max = _ref3.max;
    return checkMinMax({
      l: val.length,
      min: min && min + 1,
      max: max && max - 1
    });
  }], [isKeyExist('min') || isKeyExist('max'), function (_ref4) {
    var min = _ref4.min,
        max = _ref4.max;
    return checkMinMax({
      l: val.length,
      min: min,
      max: max
    });
  }], [_ramda.T, (0, _ramda.always)(false)]])(length);
};

exports.validateLength = validateLength;

var checkMinMax = function checkMinMax(params) {
  return (0, _ramda.cond)([[isKeysExist(['min', 'max']), function (_ref5) {
    var l = _ref5.l,
        min = _ref5.min,
        max = _ref5.max;
    return !(l <= max && l >= min) && "\u041E\u0442 ".concat(min, " \u0434\u043E ").concat(max, " \u0441\u0438\u043C\u0432.");
  }], [isKeyExist('min'), function (_ref6) {
    var l = _ref6.l,
        min = _ref6.min;
    return !(l >= min) && "\u041C\u0438\u043D. ".concat(min, " \u0441\u0438\u043C\u0432");
  }], [isKeyExist('max'), function (_ref7) {
    var l = _ref7.l,
        max = _ref7.max;
    return !(l <= max) && "\u041C\u0430\u043A\u0441. ".concat(max, " \u0441\u0438\u043C\u0432.");
  }], [_ramda.T, (0, _ramda.always)(null)]])(params);
};

exports.checkMinMax = checkMinMax;