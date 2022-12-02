import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { BACK_IMAGES, BackStyle, CATEGORIES, DIFFICULTIES } from '../constants';
import { GameSettings } from '../models';
import LocalisedTypography from './LocalisedTypography';
import { MemoGame, Settings } from './MemoGame';

const GameBoard = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    category: CATEGORIES[0].value,
    pairCount: 6,
    flipTimeout: DIFFICULTIES[1].value,
    backStyle: BackStyle.Image,
    backContent: BACK_IMAGES[0],
  });

  const handleSettings = (newGameSettings: GameSettings) => {
    setShowSettings(false);
    setGameSettings(newGameSettings);
  };

  const backToSettings = () => setShowSettings(true);

  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.paper',
        py: 2,
      }}
    >
      <Container maxWidth="md">
        <LocalisedTypography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          translationKey="welcome.title"
        />
        <LocalisedTypography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          translationKey="welcome.description"
        />
      </Container>
      <Container sx={{ py: 3 }} maxWidth="lg">
        {showSettings ? (
          <Settings gameSettings={gameSettings} handleSettings={handleSettings} />
        ) : (
          <MemoGame {...gameSettings} backToSettings={backToSettings} />
        )}
      </Container>
    </Box>
  );
};

export default GameBoard;
