import type { PropsWithChildren } from 'react';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { ContextProps, TranslationObject } from '../models';
import { fetchTranslations } from './translationHelpers';

export const TranslationContext = createContext<ContextProps>({
  language: 'en',
  getTranslation: (translationKey) => translationKey,
  updateLanguage: () => {},
});

const getTranslationInner = (translations: TranslationObject, translationKey: string[]): string => {
  const [currentKey, ...keys] = translationKey;
  const nested = translations[currentKey];

  if (!nested || typeof nested === 'string') return nested;

  return getTranslationInner(nested, keys);
};

export const TranslationProvider = ({ children }: PropsWithChildren) => {
  const [{ language, translations }, setLanguage] = useState({
    language: 'en',
    translations: {} as TranslationObject,
  });

  const updateLanguage = useCallback(async (newLanguage: string) => {
    const newTranslations = await fetchTranslations(newLanguage);
    setLanguage({ language: newLanguage, translations: newTranslations });
  }, []);

  useEffect(() => {
    updateLanguage(language);
  }, [updateLanguage, language]);

  const getTranslation = useCallback(
    (translationKey: string, props: Record<string, string | number> = {}) => {
      const splitted = translationKey.split('.');
      const initialTranslation = getTranslationInner(translations, splitted);

      const finalTranslation = Object.entries(props).reduce(
        (translation, [key, value]) => translation.replaceAll(`{{${key}}}`, value.toString()),
        initialTranslation || translationKey
      );

      return finalTranslation;
    },
    [translations]
  );

  const context = useMemo(
    () => ({
      language,
      getTranslation,
      updateLanguage,
    }),
    [language, getTranslation, updateLanguage]
  );

  return <TranslationContext.Provider value={context}>{children}</TranslationContext.Provider>;
};
