"use strict";

exports.__esModule = true;
exports.formatTime = exports.formatDate = exports.getMthName = exports.addHours = exports.reformateDateString = exports.formateDateToString = exports.isDate = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

var _validators = require("./validators");

const isDate = function isDate(date) {
  return (0, _ramda().type)(date) === 'Date';
};

exports.isDate = isDate;

const formateDateToString = function formateDateToString(date) {
  return isDate(date) && date.toLocaleString();
};

exports.formateDateToString = formateDateToString;
const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const reformateDateString = function reformateDateString(date) {
  let format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'full';
  return (0, _validators.notNilAndNotNan)(date) ? reformate(date, format) : null;
};

exports.reformateDateString = reformateDateString;

const reformate = function reformate(date, format) {
  return (0, _ramda().cond)([[(0, _ramda().equals)('time-only'), function () {
    const {
      hr,
      min,
      sec
    } = getTime(date);
    return "".concat(hr, ":").concat(min, ":").concat(sec);
  }], [(0, _ramda().equals)('date-only'), function () {
    const {
      day,
      mth,
      year
    } = getDate(date);
    return "".concat(day, "/").concat(mth, "/").concat(year);
  }], [(0, _ramda().equals)('date-report'), function () {
    const {
      day,
      mth,
      year
    } = getDate(date);
    return "".concat(year, "-").concat(mth, "-").concat(day);
  }], [(0, _ramda().equals)('mth-date-report'), function () {
    date = new Date(date);
    return "".concat(getMthName(date), " ").concat(date.getDate());
  }], [_ramda().T, function () {
    const {
      hr,
      min,
      sec
    } = getTime(date);
    const {
      day,
      mth,
      year
    } = getDate(date);
    return "".concat(day, "/").concat(mth, "/").concat(year, " ").concat(hr, ":").concat(min, ":").concat(sec);
  }]])(format);
};

const addHours = function addHours(date, h) {
  date.setHours(date.getHours() + h);
  return date;
};

exports.addHours = addHours;

const getTime = function getTime(date) {
  date = new Date(date);
  return {
    hr: formatTime(date.getHours()),
    minutes: formatTime(date.getMinutes()),
    sec: formatTime(date.getSeconds())
  };
};

const getDate = function getDate(date) {
  date = new Date(date);
  return {
    mth: formatDate(date.getMonth()),
    day: date.getDate(),
    year: date.getFullYear()
  };
};

const getMthName = function getMthName(date) {
  return monthNames[date.getMonth()];
};

exports.getMthName = getMthName;

const formatDate = function formatDate(t) {
  return (0, _ramda().inc)(t) >= 10 ? (0, _ramda().inc)(t) : "0".concat((0, _ramda().inc)(t));
};

exports.formatDate = formatDate;

const formatTime = function formatTime(t) {
  return "0".concat(t).slice(-2);
};

exports.formatTime = formatTime;