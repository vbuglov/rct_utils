import { sort } from 'ramda';

export const sortBIdx = (source: any) => sort((a: any, b: any) => a.index - b.index, source);