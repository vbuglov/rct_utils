import { trim as rTrim } from 'ramda';
import { validators } from '../validators';


export const trim = (v: string) => validators.isString(v) ? rTrim(v) : v;