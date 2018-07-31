const emojilib = require("emojilib");
const sort = require("match-sorter");

/* build proper library with included name of the emoji */
const library = Object.entries(emojilib.lib).map(([name, emojiObject]) => ({
  ...emojiObject,
  keywords: [name, ...emojiObject.keywords],
  name
}));

module.exports = key => sort(library, key, { keys: ["keywords"] });
