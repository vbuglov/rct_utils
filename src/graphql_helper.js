"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.later = exports.makeGQClient = exports.asyncErr = exports.asyncRes = void 0;

var _ramda = require("ramda");

var _graphqlRequest = require("graphql-request");

var _validators = require("./validators");

var _index = require("@/config/index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var asyncRes = (0, _ramda.curry)(function (key, obj) {
  return (0, _ramda.and)(obj[key], (0, _ramda.has)(key, obj));
});
exports.asyncRes = asyncRes;

var asyncErr = function asyncErr(key) {
  return (0, _ramda.pathEq)(['error'], key);
};

exports.asyncErr = asyncErr;

var makeGQClient = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    var headers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            headers = {
              sitetoken: 'Bearer sjdfgeuw3r783r2gqfdebsiurfhew9875y98435rh98hefnduh'
            };

            if (!(0, _validators.nilOrEmpty)(token)) {
              headers.authorization = "Bearer ".concat(token);
            }

            return _context.abrupt("return", new _graphqlRequest.GraphQLClient(_index.GRAPHQL_ENDPOINT, {
              headers: headers
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function makeGQClient(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.makeGQClient = makeGQClient;

var later = function later(func) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  return setTimeout(func, time);
};

exports.later = later;