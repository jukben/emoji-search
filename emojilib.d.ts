type EmojiShape = {
  [key: string]: Array<string>;
};

declare module "emojilib" {
  const lib: EmojiShape;
  export default lib;
}
