"use strict";

exports.__esModule = true;
exports.getJwtToken = exports.isClientSide = exports.isServerSide = void 0;

var _cache_store = _interopRequireDefault(require("./cache_store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isServerSide = typeof window === 'undefined';
exports.isServerSide = isServerSide;
const isClientSide = !isServerSide;
exports.isClientSide = isClientSide;

const getJwtToken = function getJwtToken(props) {
  return isServerSide ? _cache_store.default.cookie.from_req(props.req, 'jwtToken') : _cache_store.default.get('token');
};

exports.getJwtToken = getJwtToken;