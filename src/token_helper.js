"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJwtToken = exports.isClientSide = exports.isServerSide = void 0;

var _cache_store = _interopRequireDefault(require("./cache_store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isServerSide = typeof window === 'undefined';
exports.isServerSide = isServerSide;
var isClientSide = !isServerSide;
exports.isClientSide = isClientSide;

var getJwtToken = function getJwtToken(props) {
  return isServerSide ? _cache_store["default"].cookie.from_req(props.req, 'jwtToken') : _cache_store["default"].get('token');
};

exports.getJwtToken = getJwtToken;