import { useContext } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { TranslationContext } from '../utils/translationContext';

const LocalisedTypography = <C extends React.ElementType>({
  translationKey,
  translationProps,
  ...props
}: TypographyProps<C, { component?: C }> & {
  translationKey: string;
  translationProps?: Record<string, string | number>;
}) => {
  const { getTranslation } = useContext(TranslationContext);

  return (
    <Typography
      {...props}
      dangerouslySetInnerHTML={{
        __html: getTranslation(translationKey, translationProps),
      }}
    />
  );
};

export default LocalisedTypography;
