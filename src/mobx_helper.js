"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markStates = exports.connectStore = void 0;

var _ramda = require("ramda");

var _mobxReact = require("mobx-react");

var _mobxReactLite = require("mobx-react-lite");

var _validators = require("./validators");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storeFilter = (0, _ramda.curry)(function (selectedStore, props) {
  return _defineProperty({}, selectedStore, (0, _ramda.path)(['store', selectedStore], props));
});

var connectStore = function connectStore(container, store) {
  var modelName = '';

  if (store) {
    modelName = store;
  } else {
    var cname = (0, _ramda.head)((0, _ramda.split)('Container', container.displayName));
    modelName = (0, _ramda.toLower)((0, _ramda.head)(cname)) + cname.slice(1);
  }

  return (0, _mobxReact.inject)(storeFilter(modelName))((0, _mobxReactLite.observer)(container));
};

exports.connectStore = connectStore;

var markStates = function markStates(sobj, self) {
  if (!(0, _validators.isObject)(sobj)) {
    throw new Error('mark: invalid sobj, exepect a object');
  }

  var selfKeys = (0, _ramda.keys)(self);
  (0, _ramda.forEachObjIndexed)(function (val, key) {
    if (!(0, _ramda.contains)(key, selfKeys)) return false;

    if (!(0, _ramda.isEmpty)(val) && !Array.isArray(val) && (0, _validators.isObject)(val) && self[key] !== null) {
      self[key] = Object.assign(self[key], val);
    } else {
      self = Object.assign(self, _defineProperty({}, key, val));
    }
  }, sobj);
  return false;
};

exports.markStates = markStates;