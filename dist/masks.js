// eslint-disable-next-line import/prefer-default-export
export const wrapNumberMask = (value) => {
  if (value === '') return '';
  let str = '';
  const num = /[0-9]/g;
  if (value) str = value.match(num);
  if (str) {
    str = str.join('');
    return str;
  }
  return '';
}
