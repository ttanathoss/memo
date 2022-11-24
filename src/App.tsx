import Box from '@mui/material/Box';

import Footer from './components/Footer';
import GameBoard from './components/GameBoard';
import Header from './components/Header';

const App = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header />
    <GameBoard />
    <Footer />
  </Box>
);

export default App;
