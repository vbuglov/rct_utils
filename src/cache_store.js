"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _store = _interopRequireDefault(require("store"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var has_key = function has_key(cookie, key) {
  return new RegExp('(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(cookie);
};

var _from_req = function from_req(req, key) {
  var cookie = (0, _ramda.path)(['headers', 'cookie'], req);

  if (!cookie || !key || !has_key(cookie, key)) {
    return null;
  }

  var regexpStr = '(?:^|.*;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*';
  return unescape(cookie.replace(new RegExp(regexpStr), '$1'));
};
/**
  * Объект который несет в себе ряд функций для работы с стором кэша
  *
  * @category Store
  * @member
  * @since v0.1.0
  *
  */


var CacheStore = {
  get: function get(value, optional) {
    return _store["default"].get(value, optional);
  },
  set: function set(key, value) {
    return _store["default"].set(key, value);
  },
  remove: function remove(key) {
    return _store["default"].remove(key);
  },
  clearAll: function clearAll() {
    return _store["default"].clearAll();
  },
  cookie: {
    from_req: function from_req(req, key) {
      return _from_req(req, key);
    },
    set: function set(key, val) {
      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _jsCookie["default"].set(key, val, opt);
    },
    get: function get(key) {
      return _jsCookie["default"].get(key);
    },
    remove: function remove(key) {
      return _jsCookie["default"].remove(key);
    }
  }
};
var _default = CacheStore;
exports["default"] = _default;