import { cond, T, equals } from 'ramda'

export interface iError {
  status: string,
  error: null | string,
  answer: any
}

const errorWrapper = (error: any, answer: any, isActive: boolean): iError | any => {
  return cond([
    [equals(true), () => ({
      status: error ? 'ERROR' : 'OK',
      error: error && new String(error).toString(),
      answer
    })],
    [equals(false), () => answer],
    [T, () => 'unexpected answer by errorWrapper']
    //@ts-ignore
  ])(isActive);
};

export default errorWrapper;