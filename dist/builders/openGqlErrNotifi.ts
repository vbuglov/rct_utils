import { pipe, curry } from 'ramda';
import { openNotifi } from './openNotifi';

const stringify = curry((a, b, c) => JSON.stringify(c, a, b));
const parse = (str: string) => JSON.parse(str);

/**
 * Выводит gql ошибку
 * @param {string} title title
 * @param {string} description description
 * @param {string} type can be: success info warning error
 */
const openGqlErrNotifi = (error: any) => {
  const err = pipe(
    stringify(undefined, 2),
    parse
    //@ts-ignore
  )(error);
  try {
    openNotifi('Ошибка', err?.response?.errors[0]?.message, 'error');
  } catch (error) {
    console.log();
  }
  return err;
};

export { openGqlErrNotifi }