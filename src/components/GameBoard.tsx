import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CATEGORIES, DIFFICULTIES } from '../constants';
import { GameSettings } from '../models';
import LocalisedTypography from './LocalisedTypography';
import { MemoGame, Settings } from './MemoGame';

const GameBoard = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    category: CATEGORIES[0].value,
    pairCount: 8,
    flipTimeout: DIFFICULTIES[1].value,
  });

  const handleSettings = (newGameSettings: GameSettings) => {
    setShowSettings(false);
    setGameSettings(newGameSettings);
  };

  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
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
      <Container sx={{ py: 8 }} maxWidth="lg">
        {showSettings ? (
          <Settings gameSettings={gameSettings} handleSettings={handleSettings} />
        ) : (
          <MemoGame {...gameSettings} />
        )}
      </Container>
    </Box>
  );
};

export default GameBoard;
