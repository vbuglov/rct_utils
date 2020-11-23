"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = exports.runAfter = void 0;

var _ramda = require("ramda");

/* eslint-disable */
var runAfter = function runAfter(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

exports.runAfter = runAfter;

var pipe = function pipe(x) {
  return function () {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (r, fn) {
      return fn(r);
    }, x);
  };
};

exports.pipe = pipe;