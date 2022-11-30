import { useContext, useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';

import { BackStyle } from '../../constants';
import type { MemoCardProps } from '../../models';
import { TranslationContext } from '../../utils/translationContext';

const MemoCard = ({ card, backStyle, backContent, handleChoice, disabled }: MemoCardProps) => {
  const { img, matched } = card;
  const { getTranslation } = useContext(TranslationContext);
  const cardBackContent = useMemo(
    () => ({
      style: backStyle,
      content: backContent,
      alt: getTranslation('card.backText'),
    }),
    [backStyle, backContent, getTranslation]
  );
  const [flipped, setFlipped] = useState(matched);
  const [content, setContent] = useState(cardBackContent);

  const flipBack = () => setFlipped(false);

  const handleFlip = () => {
    if (flipped || matched || disabled) return;

    handleChoice({
      card,
      flipBack,
    });
    setFlipped(!flipped);
  };

  useEffect(() => {
    const newContent =
      flipped || matched
        ? { style: BackStyle.Image, content: img, alt: getTranslation('card.frontText', { img }) }
        : cardBackContent;
    setTimeout(() => setContent(newContent), 100);
  }, [flipped, matched, img, cardBackContent, getTranslation]);

  return (
    <Grid xs={4} sm={3} md={2}>
      <Card
        onClick={handleFlip}
        sx={{
          transition: '300ms',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${flipped || matched ? '180deg' : '0deg'})`,
          // rotate: flipped || matched ? 'y 180deg' : '0deg',
        }}
        raised={!matched}
      >
        <CardActionArea disabled={flipped || matched || disabled} title={content.alt}>
          {content.style === BackStyle.Image ? (
            <CardMedia component="img" image={content.content} alt={content.alt} />
          ) : (
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundColor: content.content,
                }}
              />
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MemoCard;
