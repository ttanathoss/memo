import type { AvailableLang } from '../models';

export const AVAILABLE_LANGS: AvailableLang[] = [
  { label: 'English', value: 'en', flagCode: 'gb' },
  { label: 'Polski', value: 'pl', flagCode: 'pl' },
].sort(({ label: label1 }, { label: label2 }) => label1.localeCompare(label2));
