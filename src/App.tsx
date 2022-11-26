import { useContext } from 'react';
import Box from '@mui/material/Box';

import Footer from './components/Footer';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import { TranslationContext } from './utils/translationContext';

const App = () => {
  const { language, updateLanguage } = useContext(TranslationContext);
  const handleUpdateLanguage = (value: string) => {
    updateLanguage(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header language={language} handleUpdateLanguage={handleUpdateLanguage} />
      <GameBoard />
      <Footer />
    </Box>
  );
};

export default App;
