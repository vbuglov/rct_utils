"use strict";

exports.__esModule = true;
exports.markStates = exports.connectStore = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

function _mobxReact() {
  const data = require("mobx-react");

  _mobxReact = function _mobxReact() {
    return data;
  };

  return data;
}

function _mobxReactLite() {
  const data = require("mobx-react-lite");

  _mobxReactLite = function _mobxReactLite() {
    return data;
  };

  return data;
}

var _validators = require("./validators");

const storeFilter = (0, _ramda().curry)(function (selectedStore, props) {
  return {
    [selectedStore]: (0, _ramda().path)(['store', selectedStore], props)
  };
});

const connectStore = function connectStore(container, store) {
  let modelName = '';

  if (store) {
    modelName = store;
  } else {
    const cname = (0, _ramda().head)((0, _ramda().split)('Container', container.displayName));
    modelName = (0, _ramda().toLower)((0, _ramda().head)(cname)) + cname.slice(1);
  }

  return (0, _mobxReact().inject)(storeFilter(modelName))((0, _mobxReactLite().observer)(container));
};

exports.connectStore = connectStore;

const markStates = function markStates(sobj, self) {
  if (!(0, _validators.isObject)(sobj)) {
    throw new Error('mark: invalid sobj, exepect a object');
  }

  const selfKeys = (0, _ramda().keys)(self);
  (0, _ramda().forEachObjIndexed)(function (val, key) {
    if (!(0, _ramda().contains)(key, selfKeys)) return false;

    if (!(0, _ramda().isEmpty)(val) && !Array.isArray(val) && (0, _validators.isObject)(val) && self[key] !== null) {
      self[key] = Object.assign(self[key], val);
    } else {
      self = Object.assign(self, {
        [key]: val
      });
    }
  }, sobj);
  return false;
};

exports.markStates = markStates;