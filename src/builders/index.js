"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builder = void 0;
const formBuilder_1 = require("./formBuilder");
const openGqlErrNotifi_1 = require("./openGqlErrNotifi");
const openNotifi_1 = require("./openNotifi");
exports.builder = {
    formBuilder: formBuilder_1.formBuilder,
    openGqlErrNotifi: openGqlErrNotifi_1.openGqlErrNotifi,
    openNotifi: openNotifi_1.openNotifi
};
