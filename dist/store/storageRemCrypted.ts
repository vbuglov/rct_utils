import errorWrapper from "../errorWrapper/errorWrapper";
import { encrypt } from "../utils/encrypt";

const storageRemCrypted = (
  name: string,
  key: string,
  errMod = false
): boolean => {
  let answer = undefined;
  let error = null;
  try {
    const hex = encrypt(name, key);
    //@ts-ignore
    localStorage.removeItem(hex);
    answer = true;
  } catch (err) {
    error = err;
  }
  return errorWrapper(answer, error, errMod);
};

export { storageRemCrypted }