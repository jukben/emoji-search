import lib from "emojilib";
import { matchSorter } from "match-sorter";

/* build proper library with included name of the emoji */
const library = Object.entries(lib).map(([name, emojiObject]) => {
  return {
    keywords: [name, ...emojiObject],
    name,
  };
});

function searchEmoji(key: string) {
  return matchSorter(library, key, { keys: ["keywords"] });
}

export default searchEmoji;
