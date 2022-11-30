export const CATEGORIES = [
  { value: 'random', translationKey: 'settings.categories.random' },
  { value: 'animals', translationKey: 'settings.categories.animals' },
  { value: 'games', translationKey: 'settings.categories.games' },
];

export enum BackStyle {
  Image = 'image',
  SolidColor = 'solid',
}
export const BACK_IMAGES = [
  'https://picsum.photos/seed/picsum/200',
  'https://picsum.photos/seed/picsum4/200',
  'https://picsum.photos/seed/picsum8/200',
  'https://picsum.photos/seed/picsum10/200',
];
export const DEFAULT_BACK_COLOR = 'hsl(0, 100%, 25%)';

export const PAIRS_MIN = 2;
export const PAIRS_MAX = 25;

export const DIFFICULTIES = [
  { translationKey: 'settings.difficulties.superEasy', value: 2000 },
  { translationKey: 'settings.difficulties.easy', value: 1000 },
  { translationKey: 'settings.difficulties.medium', value: 750 },
  { translationKey: 'settings.difficulties.hard', value: 400 },
  { translationKey: 'settings.difficulties.pro', value: 200 },
];
