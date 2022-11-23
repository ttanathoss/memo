import type { MemoCardData, PrepareCardsProps } from '../models';

const shuffleCards = (cards: MemoCardData[]): MemoCardData[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randindex = Math.floor(Math.random() * i);
    const tmp = shuffled[i];
    shuffled[i] = shuffled[randindex];
    shuffled[randindex] = tmp;
  }

  return shuffled;
};

export const prepareCards = ({ pairCount }: PrepareCardsProps): MemoCardData[] => {
  const seed = Math.floor(Math.random() * 10000);
  const ret = [];
  for (let i = 0; i < pairCount; i += 1) {
    const img = `https://picsum.photos/seed/${seed + i}/200`;
    ret.push({ id: Math.random(), img, matched: false });
    ret.push({ id: Math.random(), img, matched: false });
  }

  return shuffleCards(ret);
};

export const CARD_BACK_CONTENT = {
  image: 'https://picsum.photos/seed/picsum/200',
  alt: 'flip me',
};
