"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.formatDate = exports.getMthName = exports.addHours = exports.reformateDateString = exports.formateDateToString = exports.isDate = void 0;

var _ramda = require("ramda");

var _validators = require("./validators");

var isDate = function isDate(date) {
  return (0, _ramda.type)(date) === 'Date';
};

exports.isDate = isDate;

var formateDateToString = function formateDateToString(date) {
  return isDate(date) && date.toLocaleString();
};

exports.formateDateToString = formateDateToString;
var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

var reformateDateString = function reformateDateString(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'full';
  return (0, _validators.notNilAndNotNan)(date) ? reformate(date, format) : null;
};

exports.reformateDateString = reformateDateString;

var reformate = function reformate(date, format) {
  return (0, _ramda.cond)([[(0, _ramda.equals)('time-only'), function () {
    var _getTime = getTime(date),
        hr = _getTime.hr,
        min = _getTime.min,
        sec = _getTime.sec;

    return "".concat(hr, ":").concat(min, ":").concat(sec);
  }], [(0, _ramda.equals)('date-only'), function () {
    var _getDate = getDate(date),
        day = _getDate.day,
        mth = _getDate.mth,
        year = _getDate.year;

    return "".concat(day, "/").concat(mth, "/").concat(year);
  }], [(0, _ramda.equals)('date-report'), function () {
    var _getDate2 = getDate(date),
        day = _getDate2.day,
        mth = _getDate2.mth,
        year = _getDate2.year;

    return "".concat(year, "-").concat(mth, "-").concat(day);
  }], [(0, _ramda.equals)('mth-date-report'), function () {
    date = new Date(date);
    return "".concat(getMthName(date), " ").concat(date.getDate());
  }], [_ramda.T, function () {
    var _getTime2 = getTime(date),
        hr = _getTime2.hr,
        min = _getTime2.min,
        sec = _getTime2.sec;

    var _getDate3 = getDate(date),
        day = _getDate3.day,
        mth = _getDate3.mth,
        year = _getDate3.year;

    return "".concat(day, "/").concat(mth, "/").concat(year, " ").concat(hr, ":").concat(min, ":").concat(sec);
  }]])(format);
};

var addHours = function addHours(date, h) {
  date.setHours(date.getHours() + h);
  return date;
};

exports.addHours = addHours;

var getTime = function getTime(date) {
  date = new Date(date);
  return {
    hr: formatTime(date.getHours()),
    minutes: formatTime(date.getMinutes()),
    sec: formatTime(date.getSeconds())
  };
};

var getDate = function getDate(date) {
  date = new Date(date);
  return {
    mth: formatDate(date.getMonth()),
    day: date.getDate(),
    year: date.getFullYear()
  };
};

var getMthName = function getMthName(date) {
  return monthNames[date.getMonth()];
};

exports.getMthName = getMthName;

var formatDate = function formatDate(t) {
  return (0, _ramda.inc)(t) >= 10 ? (0, _ramda.inc)(t) : "0".concat((0, _ramda.inc)(t));
};

exports.formatDate = formatDate;

var formatTime = function formatTime(t) {
  return "0".concat(t).slice(-2);
};

exports.formatTime = formatTime;