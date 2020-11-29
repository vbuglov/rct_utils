"use strict";

exports.__esModule = true;
exports.redirectIfNeed = exports.randKey = exports.parse = exports.stringify = exports.numberWithCommas = exports.sortByIndex = exports.trimIfNeed = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

var _validators = require("./validators");

const trimIfNeed = function trimIfNeed(v) {
  return (0, _validators.isString)(v) ? (0, _ramda().trim)(v) : v;
};

exports.trimIfNeed = trimIfNeed;

const sortByIndex = function sortByIndex(source) {
  return (0, _ramda().sort)(function (a, b) {
    return a.index - b.index;
  }, source);
};

exports.sortByIndex = sortByIndex;

const numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

exports.numberWithCommas = numberWithCommas;
const stringify = (0, _ramda().curry)(function (a, b, c) {
  return JSON.stringify(c, a, b);
});
exports.stringify = stringify;

const parse = function parse(str) {
  return JSON.parse(str);
};

exports.parse = parse;

const randKey = function randKey() {
  return Math.random().toString(32).substr(4);
};

exports.randKey = randKey;

const redirectIfNeed = function redirectIfNeed(checkItem) {
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if (!(0, _ramda().isEmpty)(checkItem)) {
    window.location.href = path;
  }
};

exports.redirectIfNeed = redirectIfNeed;