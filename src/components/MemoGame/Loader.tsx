import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import LocalisedTypography from '../LocalisedTypography';

const Loader = () => (
  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <LocalisedTypography color="text.secondary" translationKey="loadingText" />
    <Box sx={{ width: '100%', mt: 1 }}>
      <LinearProgress />
    </Box>
  </Box>
);

export default Loader;
