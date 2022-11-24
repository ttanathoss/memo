import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => (
  <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Company name
      </Typography>
      <nav>
        <Link variant="button" color="text.primary" href="#a" sx={{ my: 1, mx: 1.5 }}>
          Features
        </Link>
        <Link variant="button" color="text.primary" href="#b" sx={{ my: 1, mx: 1.5 }}>
          Enterprise
        </Link>
        <Link variant="button" color="text.primary" href="#c" sx={{ my: 1, mx: 1.5 }}>
          Support
        </Link>
      </nav>
      <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
