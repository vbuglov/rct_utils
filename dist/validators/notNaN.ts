import { compose, not } from 'ramda';

export const notNaN = compose(not, isNaN);
