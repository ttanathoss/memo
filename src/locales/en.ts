export default {
  welcome: {
    title: "Let's play memory (in React)!",
    description:
      'Probably everyone knows how to play memo:<br />Just click on cards to flip them and search for matching pairs as fast as you can!',
  },
  settings: {
    errors: {
      invalidPairCount: 'Must be a number',
      outOfRangePairCount: 'Must be between {{min}} and {{max}}',
    },
    labels: {
      category: 'Images category',
      pairCount: 'Number of pairs',
      difficulty: 'Difficulty',
      backStyle: 'Cards back style',
      backImage: 'Select back image',
      backColor: 'Select back color',
    },
    styles: {
      image: 'Image',
      solid: 'Solid color',
    },
    categories: {
      random: 'Random',
      animals: 'Animals',
      games: 'Games',
    },
    difficulties: {
      superEasy: 'Super easy',
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      pro: 'PRO',
    },
    newGame: 'Start new game',
  },
  card: {
    backText: 'Click to flip!',
    frontText: 'Card set {{img}}',
  },
  summary: {
    title: 'Congratulations!',
    message: 'You played for {{turns}} turns, it took you {{seconds}} seconds',
    newGame: 'New Game',
    backToSettings: 'Change settings',
  },
  loadingText: 'Loading, please wait...',
};
