import { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import type { SummaryProps } from '../../models';
import { TranslationContext } from '../../utils/translationContext';

const Summary = ({ turns, seconds, open, handleClose }: SummaryProps) => {
  const { getTranslation } = useContext(TranslationContext);

  const handleNewGame = () => handleClose(false);
  const handleBackToSettings = () => handleClose(true);

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>{getTranslation('summary.title')}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {getTranslation('summary.message', { turns, seconds })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNewGame} variant="outlined" color="success" autoFocus focusRipple>
          {getTranslation('summary.newGame')}
        </Button>
        <Button onClick={handleBackToSettings} variant="outlined">
          {getTranslation('summary.backToSettings')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Summary;
