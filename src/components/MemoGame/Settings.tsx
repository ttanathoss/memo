import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { MuiColorInput } from 'mui-color-input';

import {
  BACK_IMAGES,
  BackStyle,
  CATEGORIES,
  DEFAULT_BACK_COLOR,
  DIFFICULTIES,
  PAIRS_MAX,
  PAIRS_MIN,
} from '../../constants';
import type { SettingsProps } from '../../models';
import { TranslationContext } from '../../utils/translationContext';

const Settings = ({ gameSettings, handleSettings }: SettingsProps) => {
  const { category, flipTimeout, backStyle, backContent } = gameSettings;

  const [pairCountValue, setPairCountValue] = useState(gameSettings.pairCount.toString());
  const [pairCountError, setPairCountError] = useState<string | undefined>();
  const [backStyleValue, setBackStyleValue] = useState(backStyle);
  const [backImageValue, setBackImageValue] = useState(backContent);
  const [backColorValue, setBackColorValue] = useState(DEFAULT_BACK_COLOR);
  const { getTranslation } = useContext(TranslationContext);

  const handlePairCountChange: React.ChangeEventHandler = ({ target }) => {
    const { value } = target as HTMLInputElement;
    setPairCountValue(value);
    if (!/^[0-9]+$/.test(value)) {
      setPairCountError(getTranslation('settings.errors.invalidPairCount'));

      return;
    }
    const parsedValue = parseInt(value, 10);
    if (parsedValue < PAIRS_MIN || parsedValue > PAIRS_MAX) {
      setPairCountError(
        getTranslation('settings.errors.outOfRangePairCount', { min: PAIRS_MIN, max: PAIRS_MAX })
      );

      return;
    }

    setPairCountError(undefined);
  };

  const handleBackStyleChange: React.ChangeEventHandler = ({ target }) => {
    const { value } = target as HTMLInputElement;
    const newStyle = BackStyle.Image === value ? BackStyle.Image : BackStyle.SolidColor;
    setBackStyleValue(newStyle);
  };

  const handleBackImageChange: React.ChangeEventHandler = ({ target }) => {
    const { value } = target as HTMLInputElement;
    setBackImageValue(value);
  };

  const handleBackColorChange = (color: string) => {
    setBackColorValue(color);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pairCountError) return;

    const data = new FormData(event.currentTarget);
    const newSettings = {
      category: data.get('category') as string,
      pairCount: parseInt(data.get('pair-count') as string, 10),
      flipTimeout: parseInt(data.get('difficulty') as string, 10),
      backStyle: backStyleValue,
      backContent: backStyleValue === BackStyle.Image ? backImageValue : backColorValue,
    };
    handleSettings(newSettings);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl fullWidth disabled>
        <FormLabel id="category">{getTranslation('settings.labels.category')}</FormLabel>
        <RadioGroup row aria-labelledby="category" defaultValue={category} name="category">
          {CATEGORIES.map(({ translationKey, value }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={getTranslation(translationKey)}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth>
        <FormLabel id="back-style">{getTranslation('settings.labels.backStyle')}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="back-style"
          value={backStyleValue}
          onChange={handleBackStyleChange}
          name="back-style"
        >
          <FormControlLabel
            control={<Radio />}
            value={BackStyle.Image}
            label={getTranslation(`settings.styles.${BackStyle.Image}`)}
          />
          <FormControlLabel
            control={<Radio />}
            value={BackStyle.SolidColor}
            label={getTranslation(`settings.styles.${BackStyle.SolidColor}`)}
          />
        </RadioGroup>
      </FormControl>
      {backStyleValue === BackStyle.Image ? (
        <FormControl fullWidth>
          <FormLabel id="back-image">{getTranslation('settings.labels.backImage')}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="back-image"
            value={backImageValue}
            onChange={handleBackImageChange}
            name="back-image"
            sx={{ gap: 1, justifyContent: 'space-between', flexWrap: { sm: 'nowrap' } }}
          >
            {BACK_IMAGES.map((value) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={<img src={value} alt={value} style={{ width: '100%' }} />}
                labelPlacement="top"
                disableTypography
                sx={{
                  mx: 0,
                  flex: { xs: '0 1 31%', sm: '0 1 100%' },
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ) : (
        <MuiColorInput
          margin="dense"
          id="back-color"
          name="back-color"
          fullWidth
          label={getTranslation('settings.labels.backColor')}
          format="hsl"
          isAlphaHidden
          value={backColorValue}
          onChange={handleBackColorChange}
        />
      )}
      <TextField
        margin="dense"
        id="pair-count"
        name="pair-count"
        fullWidth
        required
        label={getTranslation('settings.labels.pairCount')}
        value={pairCountValue}
        onChange={handlePairCountChange}
        error={pairCountError !== undefined}
        helperText={pairCountError}
      />
      <FormControl fullWidth>
        <FormLabel id="difficulty">{getTranslation('settings.labels.difficulty')}</FormLabel>
        <RadioGroup row aria-labelledby="difficulty" defaultValue={flipTimeout} name="difficulty">
          {DIFFICULTIES.map(({ translationKey, value }) => (
            <FormControlLabel
              key={translationKey}
              value={value}
              control={<Radio />}
              label={getTranslation(translationKey)}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
        {getTranslation('settings.newGame')}
      </Button>
    </Box>
  );
};

export default Settings;
