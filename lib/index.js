'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _emojilib = require('emojilib');

var _emojilib2 = _interopRequireDefault(_emojilib);

var _matchSorter = require('match-sorter');

var _matchSorter2 = _interopRequireDefault(_matchSorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* build proper library with included name of the emoji */
var library = Object.entries(_emojilib2.default.lib).map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      emojiObject = _ref2[1];

  return _extends({}, emojiObject, {
    keywords: [].concat(_toConsumableArray(emojiObject.keywords), [name])
  });
});

module.exports = function (key) {
  return (0, _matchSorter2.default)(library, key, { keys: ['keywords'] });
};
