import store from 'store'
import Cookies from 'js-cookie'
import { path } from 'ramda'

/* eslint-disable */
const has_key = (cookie, key) => {
  return new RegExp(
    '(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=',
  ).test(cookie)
}

/**
  * Функция возвращает массив объектов, в которых присутсвует заданный ключ. Поиск ведеться по массиву с обхектам
  *
  * @category Store
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
const from_req = (req, key) => {
  const cookie = path(['headers', 'cookie'], req)
  if (!cookie || !key || !has_key(cookie, key)) {
    return null
  }
  const regexpStr =
    '(?:^|.*;\\s*)' +
    escape(key).replace(/[\-\.\+\*]/g, '\\$&') +
    '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
  return unescape(cookie.replace(new RegExp(regexpStr), '$1'))
}
/* eslint-enable */

const CacheStore = {
  get: (value, optional) => store.get(value, optional),
  set: (key, value) => store.set(key, value),
  remove: (key) => store.remove(key),
  clearAll: () => store.clearAll(),
  cookie: {
    from_req: (req, key) => from_req(req, key),
    set: (key, val, opt = {}) => Cookies.set(key, val, opt),
    get: (key) => Cookies.get(key),
    remove: (key) => Cookies.remove(key),
  },
}

export default CacheStore
