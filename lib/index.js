'use strict';

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _emojilib = require('emojilib');

var _emojilib2 = _interopRequireDefault(_emojilib);

var _matchSorter = require('match-sorter');

var _matchSorter2 = _interopRequireDefault(_matchSorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* build proper library with included name of the emoji */
const library = (0, _entries2.default)(_emojilib2.default.lib).map(([name, emojiObject]) => _extends({}, emojiObject, {
  keywords: [name, ...emojiObject.keywords],
  name
}));

module.exports = key => (0, _matchSorter2.default)(library, key, { keys: ['keywords'] });
