export const fetchTranslations = (language = 'en') =>
  import(`../locales/${language}`).then((module) => module.default);
