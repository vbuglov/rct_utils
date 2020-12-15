"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aooFactory = void 0;
const aooFactory = (snapshot, amount) => {
    let array = [];
    for (let i = 0; i < amount; i++) {
        const newObj = snapshot.reduce((acc, cur) => {
            return Object.assign(Object.assign({}, acc), { [cur.key]: cur.fn(...cur.params) });
        }, {});
        array = [...array, newObj];
    }
    return array;
};
exports.aooFactory = aooFactory;
