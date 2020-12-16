import { fromPairs } from "ramda";
import { parse } from './parse';
import { redirectIfNeed } from './redirectIfNeed';
import { sortBIdx } from './sortBIdx';
import { stringify } from './stringify';
import { trim } from './trim';

export const utils = {
  parse,
  redirectIfNeed,
  sortBIdx,
  stringify,
  trim
}