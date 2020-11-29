"use strict";

exports.__esModule = true;
exports.pipe = exports.runAfter = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

/* eslint-disable */
const runAfter = function runAfter(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    const later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

exports.runAfter = runAfter;

const pipe = function pipe(x) {
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