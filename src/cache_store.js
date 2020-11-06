import store from 'store'
import Cookies from 'js-cookie'
import { path } from 'ramda'

/* eslint-disable */
const has_key = (cookie, key) => {
  return new RegExp(
    '(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=',
  ).test(cookie)
}

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
