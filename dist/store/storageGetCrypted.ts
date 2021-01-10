import errorWrapper from "../errorWrapper/errorWrapper";
import { decrypte } from "../utils/decrypte";
import { encrypt } from "../utils/encrypt";

const storageGetCrypted = (
  name: string,
  key: string,
  errMod = false
): string => {
  let answer = undefined;
  let error = null;
  try {
    const hex = encrypt(name, key);
    //@ts-ignore
    const item = localStorage.getItem(hex);
    answer = decrypte(item || "", key).length
      ? decrypte(item || "", key)
      : undefined;
  } catch (err) {
    error = err;
  }
  return errorWrapper(error, answer, errMod);
};

export { storageGetCrypted };