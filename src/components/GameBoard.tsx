import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CATEGORIES, DIFFICULTIES } from '../constants';
import { GameSettings } from '../models';
import { MemoGame, Settings } from './MemoGame';

const GameBoard = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    category: CATEGORIES[0],
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
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Welcome to react memo game!
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Probably everyone knows how to play memo:
          <br />
          Just click on cards below to flip them and search for matching pairs as fast as you can!
        </Typography>
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