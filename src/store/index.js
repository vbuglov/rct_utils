"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const storageGetCrypted_1 = require("./storageGetCrypted");
const storageRemCrypted_1 = require("./storageRemCrypted");
const storageSetCrypted_1 = require("./storageSetCrypted");
exports.store = {
    storageGetCrypted: storageGetCrypted_1.storageGetCrypted,
    storageRemCrypted: storageRemCrypted_1.storageRemCrypted,
    storageSetCrypted: storageSetCrypted_1.storageSetCrypted
};
