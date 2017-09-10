import emojiSearch from './index';

it('match match the snapshot of the "beer"', () => {
  expect(emojiSearch('beer')).toMatchSnapshot();
});

it('match match the snapshot of the "v"', () => {
  expect(emojiSearch('v')).toMatchSnapshot();
});

it('should return empty array', () => {
  expect(emojiSearch('nothing here')).toEqual([]);
});
