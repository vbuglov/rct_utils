"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageSetCrypted = void 0;
const errorWrapper_1 = require("../errorWrapper/errorWrapper");
const encrypt_1 = require("../utils/encrypt");
const storageSetCrypted = (name, value, key, errMod = false) => {
    let answer = undefined;
    let error = null;
    try {
        const keyHex = encrypt_1.encrypt(name, key);
        const valueHex = encrypt_1.encrypt(value, key);
        //@ts-ignore
        localStorage.setItem(keyHex, valueHex);
        answer = true;
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(answer, error, errMod);
};
exports.storageSetCrypted = storageSetCrypted;
