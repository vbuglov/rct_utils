import { isEmpty } from 'ramda';

export const redirectIfNeed = (checkItem: any, path = '/') => {
  if (!isEmpty(checkItem)) {
    window.location.href = path;
  }
}
