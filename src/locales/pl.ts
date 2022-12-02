export default {
  welcome: {
    title: 'Witaj w grze memo w React!',
    description:
      'Prawdopodobnie każdy wie, jak się gra w memo:<br />Po prostu klikaj na karty żeby je odwrócić i znaleźć pary najszybciej jak potrafisz!',
  },
  settings: {
    errors: {
      invalidPairCount: 'Musi być liczbą',
      outOfRangePairCount: 'Musi być pomiędzy {{min}}, a {{max}}',
    },
    labels: {
      category: 'Kategoria obrazków',
      pairCount: 'Liczba par',
      difficulty: 'Poziom trudności',
      backStyle: 'Rewers kart',
      backImage: 'Wybierz obrazek rewersu',
      backColor: 'Wybierz kolor rewersu',
    },
    styles: {
      image: 'Obraz',
      solid: 'Jednolity kolor',
    },
    categories: {
      random: 'Losowe',
      animals: 'Zwierzęta',
      games: 'Gry',
    },
    difficulties: {
      superEasy: 'Bardzo prosty',
      easy: 'Prosty',
      medium: 'Średni',
      hard: 'Trudny',
      pro: 'PRO',
    },
    newGame: 'Rozpocznij nową grę',
  },
  card: {
    backText: 'Kliknij aby obrócić!',
    frontText: 'Para {{img}}',
  },
  summary: {
    title: 'Gratulacje!',
    message: 'Gra skończona! Liczba tur: {{turns}}, zajęło Ci to {{seconds}} sekund',
    newGame: 'New Game',
    backToSettings: 'Change settings',
  },
  loadingText: 'Ładowanie, proszę czekaj...',
};
