"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageGetCrypted = void 0;
const errorWrapper_1 = require("../errorWrapper/errorWrapper");
const decrypte_1 = require("../utils/decrypte");
const encrypt_1 = require("../utils/encrypt");
const storageGetCrypted = (name, key, errMod = false) => {
    let answer = undefined;
    let error = null;
    try {
        const hex = encrypt_1.encrypt(name, key);
        //@ts-ignore
        const item = localStorage.getItem(hex);
        answer = decrypte_1.decrypte(item || "", key).length
            ? decrypte_1.decrypte(item || "", key)
            : undefined;
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(error, answer, errMod);
};
exports.storageGetCrypted = storageGetCrypted;
