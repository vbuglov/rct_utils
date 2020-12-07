"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const ramda_1 = require("ramda");
const validateType_1 = require("./validateType");
const validateLength_1 = require("./validateLength");
const resolveAdd_1 = require("./resolveAdd");
const validator = (obj, params) => {
    if (!obj || !params)
        return obj;
    const validateNonNullable = () => params.nonNullable.reduce((acc, el) => !obj[el] ? ramda_1.merge(acc, { [el]: 'Необходимый параметр' }) : acc, {});
    const validateTypes = () => params.types.reduce((acc, el) => {
        const val = validateType_1.validateType(obj[el.name], el.type);
        return val ? ramda_1.merge(acc, { [el.name]: val }) : acc;
    }, {});
    const resolver = ramda_1.cond([
        [ramda_1.equals('nonNullable'), validateNonNullable],
        [ramda_1.equals('types'), validateTypes],
        [ramda_1.equals('length'), ({ length, name }) => validateLength_1.validateLength(obj[name], length)],
        [ramda_1.T, () => obj]
    ]);
    //@ts-ignore
    return Object.keys(params).reduce(resolveAdd_1.resolveAdd(resolver), {});
};
exports.validator = validator;
