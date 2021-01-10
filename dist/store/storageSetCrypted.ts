import errorWrapper from "../errorWrapper/errorWrapper";
import { encrypt } from "../utils/encrypt";

const storageSetCrypted = (
  name: string,
  value: string,
  key: string,
  errMod = false
): boolean => {
  let answer = undefined;
  let error = null;
  try {
    const keyHex = encrypt(name, key);
    const valueHex = encrypt(value, key);
    //@ts-ignore
    localStorage.setItem(keyHex, valueHex);
    answer = true;
  } catch (err) {
    error = err;
  }
  return errorWrapper(answer, error, errMod);
};

export { storageSetCrypted };