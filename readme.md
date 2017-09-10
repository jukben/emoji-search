# @jukben/emoji-search

Exposes search function which returns arrays of related emojis: 

```javascript 
type Emoji = {
    category: string
    char: string,
    fitzpatrick_scale: boolean
    keywords: Array<string>,
    name: string,
}

(string) => Array<Emoji>
```

Based on [emojilib](https://github.com/muan/emojilib) and wonderful [match-sorter](https://github.com/kentcdodds/match-sorter).

## Install

`npm i --save-dev @jukben/emoji-search`
## Usage

```javascript
import search from "@jukben/emoji-search"

search("beer") // [{"keywords":["beer", "relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"char":"🍺","fitzpatrick_scale":false,"category":"food_and_drink", name: "beer"},{"keywords":["beers", "relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"char":"🍻","fitzpatrick_scale":false,"category":"food_and_drink", name: beers"},{"keywords":["milk_glass", "beverage","drink","cow"],"char":"🥛","fitzpatrick_scale":false,"category":"food_and_drink", name: "milk_glass"},...

search("beer")[0].char // 🍺
```
## License

<img src="https://media.giphy.com/media/AuIvUrZpzBl04/giphy.gif" width="500">

MIT