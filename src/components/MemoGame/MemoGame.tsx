import { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { useCardsPreloader } from '../../hooks';
import type { GameSettings, MemoCardDataExt } from '../../models';
import { prepareCards } from '../../utils';
import Loader from './Loader';
import MemoCard from './MemoCard';

const Game = ({ category, pairCount, flipTimeout }: GameSettings) => {
  const [cards, setCards] = useState(prepareCards({ pairCount, category }));
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState<MemoCardDataExt | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<MemoCardDataExt | null>(null);
  const [allDisabled, setAllDisabled] = useState(false);
  const { preloadingDone } = useCardsPreloader(cards);

  const handleChoice = (choice: MemoCardDataExt) => {
    if (!choiceOne) {
      setChoiceOne(choice);
    } else {
      setChoiceTwo(choice);
      setAllDisabled(true);
    }
  };

  const newTurn = useCallback(() => {
    choiceOne!.flipBack();
    choiceTwo!.flipBack();
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
    setAllDisabled(false);
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (!choiceOne || !choiceTwo) return;

    if (choiceOne.card.img === choiceTwo.card.img) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.img === choiceOne.card.img ? { ...card, matched: true } : card
        )
      );
      newTurn();
    } else {
      setTimeout(newTurn, flipTimeout);
    }
  }, [choiceOne, choiceTwo, flipTimeout, newTurn]);

  return preloadingDone ? (
    <Grid container spacing={4} sx={{ cursor: allDisabled ? 'wait' : 'auto' }}>
      {cards.map((card) => (
        <MemoCard key={card.id} card={card} handleChoice={handleChoice} disabled={allDisabled} />
      ))}
    </Grid>
  ) : (
    <Loader />
  );
};

export default Game;
