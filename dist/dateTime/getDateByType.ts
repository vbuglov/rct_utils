import { type } from 'ramda';

const getDateByType = (date: any) => {
  if (type(date) === 'String') return new Date(date.replace(/\s/, 'T'));
  return new Date(date);
};

export { getDateByType };