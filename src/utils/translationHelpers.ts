export const fetchTranslations = (language = 'en') =>
  import(`../locales/${language}.ts`).then((module) => module.default);
