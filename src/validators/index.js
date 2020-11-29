"use strict";

exports.__esModule = true;

var _hasVal = require("./hasVal");

Object.keys(_hasVal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hasVal[key]) return;
  exports[key] = _hasVal[key];
});

var _isArr = require("./isArr");

Object.keys(_isArr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isArr[key]) return;
  exports[key] = _isArr[key];
});

var _isInArr = require("./isInArr");

Object.keys(_isInArr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isInArr[key]) return;
  exports[key] = _isInArr[key];
});

var _isNumber = require("./isNumber");

Object.keys(_isNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isNumber[key]) return;
  exports[key] = _isNumber[key];
});

var _isObject = require("./isObject");

Object.keys(_isObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isObject[key]) return;
  exports[key] = _isObject[key];
});

var _isString = require("./isString");

Object.keys(_isString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isString[key]) return;
  exports[key] = _isString[key];
});