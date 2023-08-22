import { lib } from "emojilib";
import { matchSorter } from "match-sorter";

/* build proper library with included name of the emoji */
const library = Object.entries(lib).map(([name, emojiObject]) => ({
  ...emojiObject,
  keywords: [name, ...emojiObject.keywords],
  name
}));

export default (key: string) =>
  matchSorter(library, key, { keys: ["keywords"] });
