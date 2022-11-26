import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import { AVAILABLE_LANGS } from '../locales';
import type { AvailableLang, HeaderProps } from '../models';

const Header = ({ language, handleUpdateLanguage }: HeaderProps) => {
  const defaultValue = AVAILABLE_LANGS.find(({ value }) => value === language);

  const selectChange = (_event: React.SyntheticEvent, newLang: AvailableLang) =>
    handleUpdateLanguage(newLang.value);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>
          <Autocomplete
            id="language-select"
            options={AVAILABLE_LANGS}
            autoHighlight
            disableClearable
            sx={{ width: 200, mt: 2, mb: 1 }}
            value={defaultValue}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.flagCode}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.flagCode}.png 2x`}
                  alt=""
                />
                {option.label}
              </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Select language" />}
            onChange={selectChange}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
