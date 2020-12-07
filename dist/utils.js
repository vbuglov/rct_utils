import { sort, trim, curry, isEmpty } from 'ramda'
import { isString } from './validators'

export const trimIfNeed = (v) => isString(v) ? trim(v) : v;
export const sortByIndex = (source) => sort((a, b) => a.index - b.index, source);
export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
export const stringify = curry((a, b, c) => JSON.stringify(c, a, b));
export const parse = (str) => JSON.parse(str);
export const randKey = () => Math.random().toString(32).substr(4);
export const redirectIfNeed = (checkItem, path = '/') => {
    if (!isEmpty(checkItem)) {
        window.location.href = path;
    }
}
