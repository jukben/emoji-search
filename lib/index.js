"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojilib = require("emojilib");
var sort = require("match-sorter");

/* build proper library with included name of the emoji */
var library = (0, _entries2.default)(emojilib.lib).map(function (_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
      name = _ref2[0],
      emojiObject = _ref2[1];

  return (0, _extends3.default)({}, emojiObject, {
    keywords: [name].concat((0, _toConsumableArray3.default)(emojiObject.keywords)),
    name: name
  });
});

module.exports = function (key) {
  return sort(library, key, { keys: ["keywords"] });
};
