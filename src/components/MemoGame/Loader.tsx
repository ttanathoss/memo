import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const Loader = () => (
  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <Typography color="text.secondary">Loading...</Typography>
    <Box sx={{ width: '100%', mt: 1 }}>
      <LinearProgress />
    </Box>
  </Box>
);

export default Loader;
