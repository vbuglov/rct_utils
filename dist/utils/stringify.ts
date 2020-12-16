import { curry } from 'ramda';

export const stringify = curry((a, b, c) => JSON.stringify(c, a, b));