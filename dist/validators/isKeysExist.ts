import { isKeyExist } from './isKeyExist';

const isKeysExist = (keys: string[], obj: any) =>
  keys.reduce((res, key) => isKeyExist(key, obj) && res, true)

export { isKeysExist };