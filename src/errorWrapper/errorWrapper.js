"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const errorWrapper = (error, answer, isActive) => {
    return ramda_1.cond([
        [ramda_1.equals(true), () => ({
                status: error ? 'ERROR' : 'OK',
                error: error && new String(error).toString(),
                answer
            })],
        [ramda_1.equals(false), () => answer],
        [ramda_1.T, () => 'unexpected answer by errorWrapper']
        //@ts-ignore
    ])(isActive);
};
exports.default = errorWrapper;
