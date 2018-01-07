'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _emojilib = require('emojilib');

var _emojilib2 = _interopRequireDefault(_emojilib);

var _matchSorter = require('match-sorter');

var _matchSorter2 = _interopRequireDefault(_matchSorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* build proper library with included name of the emoji */
const library = (0, _entries2.default)(_emojilib2.default.lib).map(([name, emojiObject]) => (0, _extends3.default)({}, emojiObject, {
  keywords: [name, ...emojiObject.keywords],
  name
}));

module.exports = key => (0, _matchSorter2.default)(library, key, { keys: ['keywords'] });
