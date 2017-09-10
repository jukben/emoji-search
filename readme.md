# @jukben/emoji-search

Exposes search function which returns arrays of related emojis: 

```javascript 
type Emoji = {
    keywords: Array<string>,
    char: string,
    fitzpatrick_scale: boolean
    category: string
}

(string) => Array<Emoji>
```

Based on [emojilib](https://github.com/muan/emojilib) and wonderful [match-sorter](https://github.com/kentcdodds/match-sorter).

## Install

`npm i --save-dev @jukben/emoji-search`
## Usage

```javascript
import search from "@jukben/emoji-search"

search("beer") // [{"keywords":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze","beer"],"char":"🍺","fitzpatrick_scale":false,"category":"food_and_drink"},{"keywords":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze","beers"],"char":"🍻","fitzpatrick_scale":false,"category":"food_and_drink"},{"keywords":["beverage","drink","cow","milk_glass"],"char":"🥛","fitzpatrick_scale":false,"category":"food_and_drink"},...

search("beer")[0].char // 🍺
```
## License

<img src="https://media.giphy.com/media/AuIvUrZpzBl04/giphy.gif" width="500">

MIT