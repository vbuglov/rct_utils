import {
  both,
  curry
} from 'ramda'
import { isArr } from './isArr';
import { isInArr } from './isInArr';

//@ts-ignore
export const checkElementInArr = curry((arr, el) => both(isArr, isInArr(el))(arr));
