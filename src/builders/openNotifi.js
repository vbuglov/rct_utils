"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openNotifi = void 0;
//@ts-ignore
const antd_1 = require("antd");
/**
 * Показывает алерт с информацией.
 * @param {string} title title
 * @param {string} description description
 * @param {string} type value can be one of: "success | info | warning | error"
 */
const openNotifi = (title, description, type) => {
    antd_1.notification[type]({
        message: title,
        description,
        placement: 'bottomRight'
    });
};
exports.openNotifi = openNotifi;
