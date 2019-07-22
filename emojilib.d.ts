type EmojiShape = {
  [key: string]: {
    keywords: Array<string>;
    char: string;
    fitzpatrick_scale: boolean;
    category: string;
  };
};

declare module "emojilib" {
  const lib: EmojiShape;
}
