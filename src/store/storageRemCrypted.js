"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageRemCrypted = void 0;
const errorWrapper_1 = require("../errorWrapper/errorWrapper");
const encrypt_1 = require("../utils/encrypt");
const storageRemCrypted = (name, key, errMod = false) => {
    let answer = undefined;
    let error = null;
    try {
        const hex = encrypt_1.encrypt(name, key);
        //@ts-ignore
        localStorage.removeItem(hex);
        answer = true;
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(answer, error, errMod);
};
exports.storageRemCrypted = storageRemCrypted;
