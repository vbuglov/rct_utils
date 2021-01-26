"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.masks = void 0;
const wrapNumMsk_1 = require("./wrapNumMsk");
const captlzFrst_1 = require("./captlzFrst");
const lowFirst_1 = require("./lowFirst");
const slicer_1 = require("./slicer");
exports.masks = {
    lowFirst: lowFirst_1.lowFirst,
    captlzFrst: captlzFrst_1.captlzFrst,
    wrapNumMsk: wrapNumMsk_1.wrapNumMsk,
    slicer: slicer_1.slicer
};
