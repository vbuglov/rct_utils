"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKeysExist = void 0;
const isKeyExist_1 = require("./isKeyExist");
const isKeysExist = (keys, obj) => keys.reduce((res, key) => isKeyExist_1.isKeyExist(key, obj) && res, true);
exports.isKeysExist = isKeysExist;
