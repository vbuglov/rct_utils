"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openGqlErrNotifi = void 0;
const ramda_1 = require("ramda");
const openNotifi_1 = require("./openNotifi");
const stringify = ramda_1.curry((a, b, c) => JSON.stringify(c, a, b));
const parse = (str) => JSON.parse(str);
/**
 * Выводит gql ошибку
 * @param {string} title title
 * @param {string} description description
 * @param {string} type can be: success info warning error
 */
const openGqlErrNotifi = (error) => {
    var _a, _b;
    const err = ramda_1.pipe(stringify(undefined, 2), parse
    //@ts-ignore
    )(error);
    try {
        openNotifi_1.openNotifi('Ошибка', (_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.errors[0]) === null || _b === void 0 ? void 0 : _b.message, 'error');
    }
    catch (error) {
        console.log();
    }
    return err;
};
exports.openGqlErrNotifi = openGqlErrNotifi;
