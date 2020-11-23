"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GLOBAL_MAX_WIDTH = exports.MAX_CONTENT_WIDTH = exports.mediaBreakPoints = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flexRuleMaker = function flexRuleMaker(rule) {
  switch (rule) {
    case 'justify-center' || 'jcc':
      return 'justify-content: center';

    default:
      {
        return '';
      }
  }
};

var flexOpts = function flexOpts(opt1, opt2) {
  return "".concat(flexRuleMaker(opt1)).concat(flexRuleMaker(opt2));
};

var mediaBreakPoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  laptopM: 1280,
  laptopL: 1440,
  maxContent: 1520,
  desktop: 1600,
  desktopL: 1920
};
exports.mediaBreakPoints = mediaBreakPoints;
var media = Object.keys(mediaBreakPoints).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject(), mediaBreakPoints[label], _styledComponents.css.apply(void 0, arguments));
  };

  return acc;
}, {});
var zIndex = {
  header: 1998,
  popover: 3000,
  modalOverlay: 2500,
  previewOverlay: 2000,
  preview: 2001,
  doraemonOverlay: 2600,
  modalCloseBtn: 2000,
  sidebar: 1997
};

var flexColumn = function flexColumn(rule1) {
  var rule2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "\n  ".concat(flex(rule1, rule2), ";\n  flex-direction: column;\n");
};

var flex = function flex(opt1) {
  var opt2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "\n  display: flex;\n  ".concat(flexOpts(opt1, opt2), "\n");
};

var circle = function circle() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '25px';
  return "\n  width: ".concat(width, ";\n  height: ").concat(width, ";\n  border-radius: 100%;\n");
};

var MAX_CONTENT_WIDTH = '1980px';
exports.MAX_CONTENT_WIDTH = MAX_CONTENT_WIDTH;
var GLOBAL_MAX_WIDTH = '1980px';
exports.GLOBAL_MAX_WIDTH = GLOBAL_MAX_WIDTH;
var customStyles = {
  flex: flex,
  circle: circle,
  flexColumn: flexColumn,
  media: media,
  mediaBreakPoints: mediaBreakPoints,
  zIndex: zIndex,
  MAX_CONTENT_WIDTH: MAX_CONTENT_WIDTH,
  GLOBAL_MAX_WIDTH: GLOBAL_MAX_WIDTH
};
var _default = customStyles;
exports["default"] = _default;