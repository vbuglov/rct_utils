import { inc } from 'ramda';

const formatDate = (t: any) => inc(t) >= 10 ? inc(t) : `0${inc(t)}`

export { formatDate };