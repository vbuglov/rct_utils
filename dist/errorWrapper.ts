import { cond, T, equals } from 'ramda'

const errorWrapper = (error: any, answer: any, isActive: never) => {
  cond([
    [equals(true), () => { }],
    [equals(false), () => { }],
    [T, () => 'unexpected answer by errorWrapper']
  ])(isActive);
};

export { errorWrapper }; 