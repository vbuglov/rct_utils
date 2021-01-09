import { fromPairs } from "ramda";
import { parse } from './parse';
import { redirectIfNeed } from './redirectIfNeed';
import { sortBIdx } from './sortBIdx';
import { stringify } from './stringify';
import { trim } from './trim';
import { encrypt } from './encrypt';
import { decrypte } from './decrypte';

export const utils = {
  parse,
  redirectIfNeed,
  sortBIdx,
  stringify,
  trim,
  decrypte,
  encrypt
}