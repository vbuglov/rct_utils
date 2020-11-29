"use strict";

exports.__esModule = true;
exports.later = exports.makeGQClient = exports.asyncErr = exports.asyncRes = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

function _graphqlRequest() {
  const data = require("graphql-request");

  _graphqlRequest = function _graphqlRequest() {
    return data;
  };

  return data;
}

var _validators = require("./validators");

function _index() {
  const data = require("@/config/index");

  _index = function _index() {
    return data;
  };

  return data;
}

const asyncRes = (0, _ramda().curry)(function (key, obj) {
  return (0, _ramda().and)(obj[key], (0, _ramda().has)(key, obj));
});
exports.asyncRes = asyncRes;

const asyncErr = function asyncErr(key) {
  return (0, _ramda().pathEq)(['error'], key);
};

exports.asyncErr = asyncErr;

const makeGQClient = async function makeGQClient(token) {
  const headers = {
    sitetoken: 'Bearer sjdfgeuw3r783r2gqfdebsiurfhew9875y98435rh98hefnduh'
  };

  if (!(0, _validators.nilOrEmpty)(token)) {
    headers.authorization = "Bearer ".concat(token);
  }

  return new (_graphqlRequest().GraphQLClient)(_index().GRAPHQL_ENDPOINT, {
    headers
  });
};

exports.makeGQClient = makeGQClient;

const later = function later(func) {
  let time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  return setTimeout(func, time);
};

exports.later = later;