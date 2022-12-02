import { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { useCardsPreloader } from '../../hooks';
import type { MemoCardData, MemoCardDataExt, MemoGameProps } from '../../models';
import { prepareCards } from '../../utils';
import Loader from './Loader';
import MemoCard from './MemoCard';
import Summary from './Summary';

const MemoGame = ({
  category,
  pairCount,
  flipTimeout,
  backStyle,
  backContent,
  backToSettings,
}: MemoGameProps) => {
  const { cards, turns, timeSpent, allDisabled, gameFinished, handleChoice, newGame } =
    useGameLogic({
      category,
      pairCount,
      flipTimeout,
    });
  const { preloadingDone } = useCardsPreloader(cards);

  const handleModalClose = (showSettings?: boolean) => {
    if (showSettings) backToSettings();
    else newGame();
  };

  return preloadingDone ? (
    <>
      <Grid container spacing={4} sx={{ cursor: allDisabled ? 'wait' : 'auto' }}>
        {cards.map((card) => (
          <MemoCard
            key={card.id}
            card={card}
            backStyle={backStyle}
            backContent={backContent}
            handleChoice={handleChoice}
            disabled={allDisabled}
          />
        ))}
      </Grid>
      <Summary
        turns={turns}
        seconds={timeSpent}
        open={gameFinished}
        handleClose={handleModalClose}
      />
    </>
  ) : (
    <Loader />
  );
};

export default MemoGame;

const useGameLogic = ({
  category,
  pairCount,
  flipTimeout,
}: Pick<MemoGameProps, 'category' | 'pairCount' | 'flipTimeout'>) => {
  const [cards, setCards] = useState<MemoCardData[]>(prepareCards({ pairCount, category }));
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<MemoCardDataExt | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<MemoCardDataExt | null>(null);
  const [allDisabled, setAllDisabled] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timeStart, setTimeStart] = useState<number | undefined>();
  const [timeSpent, setTimeSpent] = useState(0);

  const handleChoice = (choice: MemoCardDataExt) => {
    if (!timeStart) setTimeStart(performance.now());
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
    setTurns((prevTurns) => prevTurns + 1);
    setAllDisabled(false);
  }, [choiceOne, choiceTwo]);

  const newGame = () => {
    setCards(prepareCards({ pairCount: 2, category }));
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setAllDisabled(false);
    setGameFinished(false);
    setTimeStart(undefined);
    setTimeSpent(0);
  };

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

  useEffect(() => {
    const timeEnd = performance.now();
    if (timeStart && cards.every(({ matched }) => matched)) {
      setGameFinished(true);
      const timeDiff = timeEnd - timeStart;
      setTimeSpent(Math.ceil(timeDiff / 1000));
    }
  }, [cards, timeStart]);

  return { cards, turns, timeSpent, allDisabled, gameFinished, handleChoice, newGame };
};
