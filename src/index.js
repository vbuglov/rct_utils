"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrObjsToArrObjsByK = exports.arrToVal = exports.arrToIdKV = exports.arrToObjKV = void 0;

var _ramda = require("ramda");

/**
  * Функция возвращает последний аналогичный объект по ключу и значению из
  * массива объектов. Функция подразумивает что в переданном списке будет один 
  * объект с переданным ключем и параметром.
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {string} key - название ключа из объекта
  * @param {any} value - некоторое значение ключа
  * @param {object[]} array - массив из объектов в котором ведеться поиск
  * @return {object}
  * @todo implement any action
  *
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrToObjKV("bar", 17, newArray);      //=> {foo: "hello", bar: 17, isCheck: true}
 */
const arrToObjKV = function arrToObjKV(key, value, array) {
  let searcheableObject = null;

  try {
    const sKey = (0, _ramda.lensProp)(key);
    array.forEach(function (object) {
      const currentValue = (0, _ramda.view)(sKey, object);
      if (currentValue === value) searcheableObject = object;
    });
  } catch (error) {}

  return searcheableObject;
};
/**
  * Функция возвращает номер объекта в массиве
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {string} key - название ключа из объекта
  * @param {any} value - некоторое значение ключа
  * @param {object[]} array - массив из объектов в котором ведеться поиск
  * @return {number} - порядковый номер объекта в массиве
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrayToObjsKV("foo", "bye", newArray);      //=> 1
  */


exports.arrToObjKV = arrToObjKV;

const arrToIdKV = function arrToIdKV(key, value, array) {
  let id = null;

  try {
    const sKey = (0, _ramda.lensProp)(key);
    array.forEach(function (object, idx) {
      const currentValue = (0, _ramda.view)(sKey, object);
      if (currentValue === value) id = idx;
    });
  } catch (error) {}

  return id;
};
/**
  * Функция возвращает массив значений ключей из аналогичных объектов по названию ключа.
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {Array} array - массив в котором ведёться поиск
  * @param {string} key - некоторое значение ключа
  * @return {Array} - values[]
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}]
  *      arrToVal(newArray, "foo");      //=> ["hello", "bye"]
  */


exports.arrToIdKV = arrToIdKV;

const arrToVal = function arrToVal(array, key) {
  if ((0, _ramda.is)(Array, array)) {
    return array.map(function (el) {
      const item = (0, _ramda.pickAll)([key], el);
      return (0, _ramda.values)(item)[0];
    });
  }

  return null;
};
/**
  * Функция возвращает массив объектов, в которых присутсвует заданный ключ. Поиск ведеться по массиву с объектами
  *
  * @category ArrayFinders
  * @method
  * @since v0.1.0
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @return {Object[]}
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}]
  *      arrObjsToArrObjsByK(newArray, "bar");      //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}]
  */


exports.arrToVal = arrToVal;

const arrObjsToArrObjsByK = function arrObjsToArrObjsByK(array, key) {
  let answer = [];

  try {
    answer = array.map(function (el) {
      if (el[key]) {
        return el;
      }

      return null;
    }).filter(function (el) {
      return el;
    });
  } catch (error) {
    console.log(error);
  }

  return answer;
};

exports.arrObjsToArrObjsByK = arrObjsToArrObjsByK;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValueInObjectfListOfObjects = void 0;

var _ramda = require("ramda");

/* eslint-disable max-len */

/**
  * Функция возвращает обновленный массив объектов, в которых присутсвует заданный ключ. Поиск ведеться по массиву с обхектам
  *
  * @category ArrayUpdater
  * @method
  * @since v0.1.0
  * @param {array} array - название ключа из объекта
  * @param {string} key - некоторое значение ключа
  * @return {object[]}
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}]
  *      arrayObjsToArrayObjs(newArray, "bar");      //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}]
  */
const updateValueInObjectfListOfObjects = function updateValueInObjectfListOfObjects(searchKeyName, searchKeyValue, updatebleValueKeyName, updatebleValueFunction, array) {
  const objId = getIdByKeyAndValueFromArray(searchKeyName, searchKeyValue, array);
  const updatedObj = array[objId];
  updatedObj.updatebleValueKeyName = updatebleValueFunction(updatedObj.updatebleValueKeyName);
  const newArray = array;
  newArray[objId] = updatedObj;
  return newArray;
};

exports.updateValueInObjectfListOfObjects = updateValueInObjectfListOfObjects;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(require("store"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const has_key = function has_key(cookie, key) {
  return new RegExp('(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(cookie);
};

const _from_req = function from_req(req, key) {
  const cookie = (0, _ramda.path)(['headers', 'cookie'], req);

  if (!cookie || !key || !has_key(cookie, key)) {
    return null;
  }

  const regexpStr = '(?:^|.*;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*';
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


const CacheStore = {
  get: function get(value, optional) {
    return _store.default.get(value, optional);
  },
  set: function set(key, value) {
    return _store.default.set(key, value);
  },
  remove: function remove(key) {
    return _store.default.remove(key);
  },
  clearAll: function clearAll() {
    return _store.default.clearAll();
  },
  cookie: {
    from_req: function from_req(req, key) {
      return _from_req(req, key);
    },
    set: function set(key, val) {
      let opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _jsCookie.default.set(key, val, opt);
    },
    get: function get(key) {
      return _jsCookie.default.get(key);
    },
    remove: function remove(key) {
      return _jsCookie.default.remove(key);
    }
  }
};
var _default = CacheStore;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GLOBAL_MAX_WIDTH = exports.MAX_CONTENT_WIDTH = exports.mediaBreakPoints = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n    @media (max-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const flexRuleMaker = function flexRuleMaker(rule) {
  switch (rule) {
    case 'justify-center' || 'jcc':
      return 'justify-content: center';

    default:
      {
        return '';
      }
  }
};

const flexOpts = function flexOpts(opt1, opt2) {
  return "".concat(flexRuleMaker(opt1)).concat(flexRuleMaker(opt2));
};

const mediaBreakPoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  laptopM: 1280,
  laptopL: 1440,
  maxContent: 1520,
  desktop: 1600,
  desktopL: 1920
};
exports.mediaBreakPoints = mediaBreakPoints;
const media = Object.keys(mediaBreakPoints).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject(), mediaBreakPoints[label], (0, _styledComponents.css)(...arguments));
  };

  return acc;
}, {});
const zIndex = {
  header: 1998,
  popover: 3000,
  modalOverlay: 2500,
  previewOverlay: 2000,
  preview: 2001,
  doraemonOverlay: 2600,
  modalCloseBtn: 2000,
  sidebar: 1997
};

const flexColumn = function flexColumn(rule1) {
  let rule2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "\n  ".concat(flex(rule1, rule2), ";\n  flex-direction: column;\n");
};

const flex = function flex(opt1) {
  let opt2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "\n  display: flex;\n  ".concat(flexOpts(opt1, opt2), "\n");
};

const circle = function circle() {
  let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '25px';
  return "\n  width: ".concat(width, ";\n  height: ").concat(width, ";\n  border-radius: 100%;\n");
};

const MAX_CONTENT_WIDTH = '1980px';
exports.MAX_CONTENT_WIDTH = MAX_CONTENT_WIDTH;
const GLOBAL_MAX_WIDTH = '1980px';
exports.GLOBAL_MAX_WIDTH = GLOBAL_MAX_WIDTH;
const customStyles = {
  flex,
  circle,
  flexColumn,
  media,
  mediaBreakPoints,
  zIndex,
  MAX_CONTENT_WIDTH,
  GLOBAL_MAX_WIDTH
};
var _default = customStyles;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = exports.runAfter = void 0;

var _ramda = require("ramda");

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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.later = exports.makeGQClient = exports.asyncErr = exports.asyncRes = void 0;

var _ramda = require("ramda");

var _graphqlRequest = require("graphql-request");

var _validators = require("./validators");

var _index = require("@/config/index");

const asyncRes = (0, _ramda.curry)(function (key, obj) {
  return (0, _ramda.and)(obj[key], (0, _ramda.has)(key, obj));
});
exports.asyncRes = asyncRes;

const asyncErr = function asyncErr(key) {
  return (0, _ramda.pathEq)(['error'], key);
};

exports.asyncErr = asyncErr;

const makeGQClient = async function makeGQClient(token) {
  const headers = {
    sitetoken: 'Bearer sjdfgeuw3r783r2gqfdebsiurfhew9875y98435rh98hefnduh'
  };

  if (!(0, _validators.nilOrEmpty)(token)) {
    headers.authorization = "Bearer ".concat(token);
  }

  return new _graphqlRequest.GraphQLClient(_index.GRAPHQL_ENDPOINT, {
    headers
  });
};

exports.makeGQClient = makeGQClient;

const later = function later(func) {
  let time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  return setTimeout(func, time);
};

exports.later = later;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "arrayToObjsKV", {
  enumerable: true,
  get: function get() {
    return _getters.arrayToObjsKV;
  }
});
Object.defineProperty(exports, "arrayToIdKV", {
  enumerable: true,
  get: function get() {
    return _getters.arrayToIdKV;
  }
});
Object.defineProperty(exports, "arrToVal", {
  enumerable: true,
  get: function get() {
    return _getters.arrToVal;
  }
});
Object.defineProperty(exports, "arrObjsToArrObjsByK", {
  enumerable: true,
  get: function get() {
    return _getters.arrObjsToArrObjsByK;
  }
});
Object.defineProperty(exports, "updateValueInObjectfListOfObjects", {
  enumerable: true,
  get: function get() {
    return _updaters.updateValueInObjectfListOfObjects;
  }
});
Object.defineProperty(exports, "updateObjectKeys", {
  enumerable: true,
  get: function get() {
    return _updaters.updateObjectKeys;
  }
});
Object.defineProperty(exports, "updObjK", {
  enumerable: true,
  get: function get() {
    return _updaters2.updObjK;
  }
});
Object.defineProperty(exports, "wrapNumMsk", {
  enumerable: true,
  get: function get() {
    return _wrapNumMsk.wrapNumMsk;
  }
});
Object.defineProperty(exports, "hasVal", {
  enumerable: true,
  get: function get() {
    return _wrapNumMsk.hasVal;
  }
});
Object.defineProperty(exports, "isArr", {
  enumerable: true,
  get: function get() {
    return _wrapNumMsk.isArr;
  }
});
Object.defineProperty(exports, "isInArr", {
  enumerable: true,
  get: function get() {
    return _wrapNumMsk.isInArr;
  }
});
Object.defineProperty(exports, "isNumber", {
  enumerable: true,
  get: function get() {
    return _wrapNumMsk.isNumber;
  }
});
Object.defineProperty(exports, "isObject", {
  enumerable: true,
  get: function get() {
    return _wrapNumMsk.isObject;
  }
});
Object.defineProperty(exports, "isString", {
  enumerable: true,
  get: function get() {
    return _wrapNumMsk.isString;
  }
});

var _getters = require("./arrayFunctions/getters");

var _updaters = require("./arrayFunctions/updaters");

var _updaters2 = require("./objectFunctions/updaters");

var _wrapNumMsk = require("./wrapNumMsk");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapNumMsk = void 0;

/**
  * Функция преобразовывает строку, в строку, в которой содержаться только числа
  * 
  * @category Masks
  * @method
  * @since v0.1.0
  * @param {string} value - строка которая будет оборачиваться в маску
  * @return {string}
  * 
  * @example
  *
  *      const numStr = wrapNumMsk('123abc456'); //=> 123456
  */
const wrapNumMsk = function wrapNumMsk(value) {
  if (value === '') return '';
  let str = '';
  const num = /[0-9]/g;
  if (value) str = value.match(num);

  if (str) {
    str = str.join('');
    return str;
  }

  return '';
};

exports.wrapNumMsk = wrapNumMsk;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markStates = exports.connectStore = void 0;

var _ramda = require("ramda");

var _mobxReact = require("mobx-react");

var _mobxReactLite = require("mobx-react-lite");

var _validators = require("./validators");

const storeFilter = (0, _ramda.curry)(function (selectedStore, props) {
  return {
    [selectedStore]: (0, _ramda.path)(['store', selectedStore], props)
  };
});

const connectStore = function connectStore(container, store) {
  let modelName = '';

  if (store) {
    modelName = store;
  } else {
    const cname = (0, _ramda.head)((0, _ramda.split)('Container', container.displayName));
    modelName = (0, _ramda.toLower)((0, _ramda.head)(cname)) + cname.slice(1);
  }

  return (0, _mobxReact.inject)(storeFilter(modelName))((0, _mobxReactLite.observer)(container));
};

exports.connectStore = connectStore;

const markStates = function markStates(sobj, self) {
  if (!(0, _validators.isObject)(sobj)) {
    throw new Error('mark: invalid sobj, exepect a object');
  }

  const selfKeys = (0, _ramda.keys)(self);
  (0, _ramda.forEachObjIndexed)(function (val, key) {
    if (!(0, _ramda.contains)(key, selfKeys)) return false;

    if (!(0, _ramda.isEmpty)(val) && !Array.isArray(val) && (0, _validators.isObject)(val) && self[key] !== null) {
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
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updObjK = void 0;

var _ramda = require("ramda");

/**
  * Функция преобразовывает ключи в объекте в соотсвтвиие с функцией update
  * 
  * @category ArrayUpdater
  * @method
  * @since v0.1.0
  * @param {object} object - название ключа из объекта
  * @param {function} updater - некоторое значение ключа
  * @return {object[]}
  * 
  * @example
  *
  *      const newArray = [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}, {foo: "world", isCheck: true}]
  *      arrayObjsToArrayObjs(newArray, "bar");      //=> [{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21}]
  */
const updObjK = function updObjK(object, updater) {
  if ((0, _ramda.is)(Object, object)) {
    const objKeys = (0, _ramda.keys)(object);
    const objValues = (0, _ramda.values)(object);
    const updatedKeys = objKeys.map(function (el) {
      return updater(el);
    });
    return (0, _ramda.zipObj)(updatedKeys, objValues);
  }

  console.error('variable is not a object');
  return null;
};

exports.updObjK = updObjK;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectCreator = void 0;

var _validators = require("./validators");

var _time_funcs = require("./time_funcs");

var _ramda = require("ramda");

/**
 *
 * @param obj         - базовый объект
 * @param params      - список параметров
 * @param nonNullable - запрет на замену на null
 * @param dates       - переформатирует дату в строку нужного вида
 * @param bigInt      - чтобы избежать ошибок с числами с более чем 8 порядка
 * @param phone       - оставляет только числа
 * @param booleans    - возвращает либо пришедший boolean либо false
 * @param default    - возвращает значение или null
 *
 * @description Обязательно! имя параметра дожно совпадать с именем параметра объекта
 * Проверяет параметры и, при необходимости подставляет недостающие значения (null)
 * сond - функция из ramda - первый элемент условие - второй способ обработки
 * таким образом для доп валидации достаточно добавить функцию проверки и обработки
 */
const resolveAdd = (0, _ramda.curry)(function (resolver, obj, el) {
  return (0, _ramda.merge)(obj, {
    [el]: resolver(el)
  });
}); // eslint-disable-next-line import/prefer-default-export

const objectCreator = function objectCreator(obj, _ref) {
  let {
    params,
    nonNullable,
    dates,
    bigInt,
    phone,
    booleans
  } = _ref;
  const resolver = (0, _ramda.cond)([[(0, _validators.hasVal)(obj), function (el) {
    return +obj[el].value;
  }], [(0, _validators.checkElementInArr)(bigInt), function (el) {
    return "".concat(obj[el]);
  }], [(0, _validators.checkElementInArr)(dates), function (el) {
    return (0, _time_funcs.formateDateToString)(obj[el]) || null;
  }], [(0, _validators.checkElementInArr)(nonNullable), function (el) {
    return obj[el];
  }], [(0, _validators.checkElementInArr)(phone), function (el) {
    return obj[el].replace(/\D/gm, '');
  }], [(0, _validators.checkElementInArr)(booleans), function (el) {
    return obj[el] || false;
  }], [_ramda.T, function (el) {
    return obj[el] || null;
  }]]);
  return params.reduce(resolveAdd(resolver), {});
};

exports.objectCreator = objectCreator;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slicer = exports.lwFirstLett = exports.captlzFrstLett = void 0;

/**
  * Функция возвращает строку где первый символ становится заглавным
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @return {string}
  * 
  * @example
  *
  *      lwFirstLett('string') //=> 'String'
  */
const captlzFrstLett = function captlzFrstLett(string) {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);else {
    const error = "error by func capitalizeFirstLetter, ivalid string. string can't equal ".concat(string);
    console.error(error);
    return error;
  }
};
/**
  * Функция обрезает строку до необходимого количества символов, если в этом есть необходимость
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @param {number} key - некоторое значение ключа
  * @return {string}
  * 
  * @example
  *
  *      lwFirstLett('String') //=> 'string'
  */


exports.captlzFrstLett = captlzFrstLett;

const lwFirstLett = function lwFirstLett(string) {
  if (string && string[0] && type(string) === "String") return string[0].toLowerCase() + string.slice(1);else {
    const error = "error by func lowerFirstLetter, ivalid string. string can't equal ".concat(string);
    console.error(error);
    return error;
  }
};
/**
  * Функция обрезает строку до необходимого количества символов, если в этом есть необходимость
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @param {number} key - некоторое значение ключа
  * @return {string}
  * 
  * @example
  *
  *      slicer()
  */


exports.lwFirstLett = lwFirstLett;

const slicer = function slicer(string) {
  let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;

  if (string && string.length > length) {
    return string.substring(0, length) + "...";
  }

  return string;
};

exports.slicer = slicer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.formatDate = exports.getMthName = exports.addHours = exports.reformateDateString = exports.formateDateToString = exports.isDate = void 0;

var _ramda = require("ramda");

var _validators = require("./validators");

const isDate = function isDate(date) {
  return (0, _ramda.type)(date) === 'Date';
};

exports.isDate = isDate;

const formateDateToString = function formateDateToString(date) {
  return isDate(date) && date.toLocaleString();
};

exports.formateDateToString = formateDateToString;
const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const reformateDateString = function reformateDateString(date) {
  let format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'full';
  return (0, _validators.notNilAndNotNan)(date) ? reformate(date, format) : null;
};

exports.reformateDateString = reformateDateString;

const reformate = function reformate(date, format) {
  return (0, _ramda.cond)([[(0, _ramda.equals)('time-only'), function () {
    const {
      hr,
      min,
      sec
    } = getTime(date);
    return "".concat(hr, ":").concat(min, ":").concat(sec);
  }], [(0, _ramda.equals)('date-only'), function () {
    const {
      day,
      mth,
      year
    } = getDate(date);
    return "".concat(day, "/").concat(mth, "/").concat(year);
  }], [(0, _ramda.equals)('date-report'), function () {
    const {
      day,
      mth,
      year
    } = getDate(date);
    return "".concat(year, "-").concat(mth, "-").concat(day);
  }], [(0, _ramda.equals)('mth-date-report'), function () {
    date = new Date(date);
    return "".concat(getMthName(date), " ").concat(date.getDate());
  }], [_ramda.T, function () {
    const {
      hr,
      min,
      sec
    } = getTime(date);
    const {
      day,
      mth,
      year
    } = getDate(date);
    return "".concat(day, "/").concat(mth, "/").concat(year, " ").concat(hr, ":").concat(min, ":").concat(sec);
  }]])(format);
};

const addHours = function addHours(date, h) {
  date.setHours(date.getHours() + h);
  return date;
};

exports.addHours = addHours;

const getTime = function getTime(date) {
  date = new Date(date);
  return {
    hr: formatTime(date.getHours()),
    minutes: formatTime(date.getMinutes()),
    sec: formatTime(date.getSeconds())
  };
};

const getDate = function getDate(date) {
  date = new Date(date);
  return {
    mth: formatDate(date.getMonth()),
    day: date.getDate(),
    year: date.getFullYear()
  };
};

const getMthName = function getMthName(date) {
  return monthNames[date.getMonth()];
};

exports.getMthName = getMthName;

const formatDate = function formatDate(t) {
  return (0, _ramda.inc)(t) >= 10 ? (0, _ramda.inc)(t) : "0".concat((0, _ramda.inc)(t));
};

exports.formatDate = formatDate;

const formatTime = function formatTime(t) {
  return "0".concat(t).slice(-2);
};

exports.formatTime = formatTime;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectIfNeed = exports.randKey = exports.parse = exports.stringify = exports.numberWithCommas = exports.sortByIndex = exports.trimIfNeed = void 0;

var _ramda = require("ramda");

var _validators = require("./validators");

const trimIfNeed = function trimIfNeed(v) {
  return (0, _validators.isString)(v) ? (0, _ramda.trim)(v) : v;
};

exports.trimIfNeed = trimIfNeed;

const sortByIndex = function sortByIndex(source) {
  return (0, _ramda.sort)(function (a, b) {
    return a.index - b.index;
  }, source);
};

exports.sortByIndex = sortByIndex;

const numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

exports.numberWithCommas = numberWithCommas;
const stringify = (0, _ramda.curry)(function (a, b, c) {
  return JSON.stringify(c, a, b);
});
exports.stringify = stringify;

const parse = function parse(str) {
  return JSON.parse(str);
};

exports.parse = parse;

const randKey = function randKey() {
  return Math.random().toString(32).substr(4);
};

exports.randKey = randKey;

const redirectIfNeed = function redirectIfNeed(checkItem) {
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if (!(0, _ramda.isEmpty)(checkItem)) {
    window.location.href = path;
  }
};

exports.redirectIfNeed = redirectIfNeed;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasVal = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет есть ли подобный элемент в объекте. Возвращаемая функция карировання
  * @category validators
  * @method
  * @since v0.1.0
  * @param {Object} obj - объект в котором ведётся поиск
  * @param {string} key - ключ значения
  * @return {boolean}
  *
  * @example
  *
  *      const obj = {1}
  *      hasVal(12);      //=> false
  *      hasVal([]);      //=> true
 */
const hasVal = (0, _ramda.curry)(function (obj, el) {
  return !!obj[el] && !!obj[el].value;
});
exports.hasVal = hasVal;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArr = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет массив ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая перменная
  * @return {boolean}
  *
  * @example
  *
  *      isArr(12);      //=> false
  *      isArr([]);      //=> true
 */
const isArr = (0, _ramda.is)(Array);
exports.isArr = isArr;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInArr = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет есть ли подобный элемент в массиве.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая перменная
  * @return {boolean}
  *
  * @example
  *
  *      isArr(12);      //=> false
  *      isArr([]);      //=> true
 */
const isInArr = (0, _ramda.curry)(function (el, arr) {
  return arr.findIndex(function (arrEl) {
    return arrEl === el;
  }) >= 0;
});
exports.isInArr = isInArr;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет число ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая перменная
  * @return {boolean}
  *
  * @example
  *
  *      isArr(12);      //=> false
  *      isArr([]);      //=> true
 */
const isNumber = (0, _ramda.both)((0, _ramda.is)(Number), (0, _ramda.complement)(equals(NaN)));
exports.isNumber = isNumber;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет объект ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая переменная
  * @return {boolean}
  *
  * @example
  *
  *      isObject(12);      //=> false
  *      isObject({});      //=> true
 */
const isObject = (0, _ramda.is)(Object);
exports.isObject = isObject;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет строка ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая переменная
  * @return {boolean}
  *
  * @example
  *
  *      isString(12);      //=> false
  *      isString('abc');      //=> true
 */
const isString = (0, _ramda.is)(String);
exports.isString = isString;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMinMax = exports.validateLength = exports.validateType = exports.validator = exports.emptyArr = exports.isKeysExist = exports.isKeyExist = exports.rejectEmptyNames = exports.checkElementInArr = exports.nilOrEmpty = exports.isEmptyValue = exports.notNilAndNotNan = exports.notUndef = exports.notNil = exports.notNaN = exports.notEmpty = void 0;

var _ramda = require("ramda");

const notEmpty = (0, _ramda.compose)(_ramda.not, _ramda.isEmpty);
exports.notEmpty = notEmpty;
const notNaN = (0, _ramda.compose)(_ramda.not, isNaN);
exports.notNaN = notNaN;
const notNil = (0, _ramda.compose)(_ramda.not, _ramda.isNil);
exports.notNil = notNil;

const notUndef = function notUndef(val) {
  return val !== undefined;
};

exports.notUndef = notUndef;
const notNilAndNotNan = (0, _ramda.both)(notNaN, notNil);
exports.notNilAndNotNan = notNilAndNotNan;
const isEmptyValue = (0, _ramda.compose)(_ramda.isEmpty, _ramda.trim);
exports.isEmptyValue = isEmptyValue;
const nilOrEmpty = (0, _ramda.either)(_ramda.isEmpty, _ramda.isNil);
exports.nilOrEmpty = nilOrEmpty;
const checkElementInArr = (0, _ramda.curry)(function (arr, el) {
  return (0, _ramda.both)(isArr, isInArr(el))(arr);
});
exports.checkElementInArr = checkElementInArr;
const rejectEmptyNames = (0, _ramda.reject)(function (el) {
  return (0, _ramda.isNil)(el) || (0, _ramda.isNil)(el.name);
});
exports.rejectEmptyNames = rejectEmptyNames;

const isKeyExist = function isKeyExist(key, obj) {
  return !!obj[key];
};

exports.isKeyExist = isKeyExist;

const isKeysExist = function isKeysExist(keys, obj) {
  return keys.reduce(function (res, key) {
    return isKeyExist(key, obj) && res;
  }, true);
};

exports.isKeysExist = isKeysExist;
const emptyArr = (0, _ramda.both)(isArr, _ramda.isEmpty);
exports.emptyArr = emptyArr;
const resolveAdd = (0, _ramda.curry)(function (resolver, obj, el) {
  return (0, _ramda.merge)(obj, resolver(el));
});

const validator = function validator(obj, params) {
  if (!obj || !params) return obj;

  const validateNonNullable = function validateNonNullable() {
    return params.nonNullable.reduce(function (acc, el) {
      return !obj[el] ? (0, _ramda.merge)(acc, {
        [el]: 'Необходимый параметр'
      }) : acc;
    }, {});
  };

  const validateTypes = function validateTypes() {
    return params.types.reduce(function (acc, el) {
      const val = validateType(obj[el.name], el.type);
      return val ? (0, _ramda.merge)(acc, {
        [el.name]: val
      }) : acc;
    }, {});
  };

  const resolver = (0, _ramda.cond)([[(0, _ramda.equals)('nonNullable'), validateNonNullable], [(0, _ramda.equals)('types'), validateTypes], [(0, _ramda.equals)('length'), function (_ref) {
    let {
      length,
      name
    } = _ref;
    return validateLength(obj[name], length);
  }], [_ramda.T, function () {
    return obj;
  }]]);
  return Object.keys(params).reduce(resolveAdd(resolver), {});
};

exports.validator = validator;

const validateType = function validateType(val, type) {
  return (0, _ramda.cond)([[(0, _ramda.equals)('number'), function () {
    return !isNumber(val) && 'числовое значение';
  }], [(0, _ramda.equals)('object'), function () {
    return !isObject && 'не верное значение';
  }], [_ramda.T, (0, _ramda.always)(false)]])(type);
};

exports.validateType = validateType;

const validateLength = function validateLength(val, length) {
  return (0, _ramda.cond)([[isKeyExist('equals'), function (_ref2) {
    let {
      equals
    } = _ref2;
    return val.length !== equals && "".concat(equals, " \u0441\u0438\u043C\u0432.");
  }], [isKeyExist('strict'), function (_ref3) {
    let {
      min,
      max
    } = _ref3;
    return checkMinMax({
      l: val.length,
      min: min && min + 1,
      max: max && max - 1
    });
  }], [isKeyExist('min') || isKeyExist('max'), function (_ref4) {
    let {
      min,
      max
    } = _ref4;
    return checkMinMax({
      l: val.length,
      min,
      max
    });
  }], [_ramda.T, (0, _ramda.always)(false)]])(length);
};

exports.validateLength = validateLength;

const checkMinMax = function checkMinMax(params) {
  return (0, _ramda.cond)([[isKeysExist(['min', 'max']), function (_ref5) {
    let {
      l,
      min,
      max
    } = _ref5;
    return !(l <= max && l >= min) && "\u041E\u0442 ".concat(min, " \u0434\u043E ").concat(max, " \u0441\u0438\u043C\u0432.");
  }], [isKeyExist('min'), function (_ref6) {
    let {
      l,
      min
    } = _ref6;
    return !(l >= min) && "\u041C\u0438\u043D. ".concat(min, " \u0441\u0438\u043C\u0432");
  }], [isKeyExist('max'), function (_ref7) {
    let {
      l,
      max
    } = _ref7;
    return !(l <= max) && "\u041C\u0430\u043A\u0441. ".concat(max, " \u0441\u0438\u043C\u0432.");
  }], [_ramda.T, (0, _ramda.always)(null)]])(params);
};

exports.checkMinMax = checkMinMax;
