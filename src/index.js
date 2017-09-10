import emojilib from 'emojilib';
import sort from 'match-sorter';

/* build proper library with included name of the emoji */
const library = Object.entries(emojilib.lib).map(([name, emojiObject]) => ({
  ...emojiObject,
  name: name,
  keywords: [name, ...emojiObject.keywords],
}));

module.exports = key => sort(library, key, { keys: ['keywords'] });
