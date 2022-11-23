import { useEffect, useState } from 'react';

import type { MemoCardData } from '../models';

const preloadImage = (src: string) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    // eslint-disable-next-line no-multi-assign
    img.onerror = img.onabort = () => {
      reject(src);
    };
    img.src = src;
  });

const useCardsPreloader = (cards: MemoCardData[]) => {
  const [preloadingDone, setPreloadingDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const preload = async () => {
      if (cancelled) return;

      await Promise.all(cards.map(({ img }) => preloadImage(img)));

      if (cancelled) return;

      setPreloadingDone(true);
    };

    preload();

    return () => {
      cancelled = true;
    };
  }, [cards]);

  return { preloadingDone };
};

export default useCardsPreloader;
