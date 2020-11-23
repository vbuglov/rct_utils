"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectIfNeed = exports.randKey = exports.parse = exports.stringify = exports.numberWithCommas = exports.sortByIndex = exports.trimIfNeed = void 0;

var _ramda = require("ramda");

var _validators = require("./validators");

var trimIfNeed = function trimIfNeed(v) {
  return (0, _validators.isString)(v) ? (0, _ramda.trim)(v) : v;
};

exports.trimIfNeed = trimIfNeed;

var sortByIndex = function sortByIndex(source) {
  return (0, _ramda.sort)(function (a, b) {
    return a.index - b.index;
  }, source);
};

exports.sortByIndex = sortByIndex;

var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

exports.numberWithCommas = numberWithCommas;
var stringify = (0, _ramda.curry)(function (a, b, c) {
  return JSON.stringify(c, a, b);
});
exports.stringify = stringify;

var parse = function parse(str) {
  return JSON.parse(str);
};

exports.parse = parse;

var randKey = function randKey() {
  return Math.random().toString(32).substr(4);
};

exports.randKey = randKey;

var redirectIfNeed = function redirectIfNeed(checkItem) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if (!(0, _ramda.isEmpty)(checkItem)) {
    window.location.href = path;
  }
};

exports.redirectIfNeed = redirectIfNeed;