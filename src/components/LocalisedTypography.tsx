import { useContext } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { TranslationContext } from '../utils/translationContext';

const LocalisedTypography = <C extends React.ElementType>({
  translationKey,
  ...props
}: TypographyProps<C, { component?: C }> & { translationKey: string }) => {
  const { getTranslation } = useContext(TranslationContext);

  return (
    <Typography
      {...props}
      dangerouslySetInnerHTML={{
        __html: getTranslation(translationKey),
      }}
    />
  );
};

export default LocalisedTypography;
