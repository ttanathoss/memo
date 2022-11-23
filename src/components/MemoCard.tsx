import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import type { MemoCardProps } from '../models';
import { CARD_BACK_CONTENT } from '../utils';

const MemoCard = ({ card, handleChoice, disabled }: MemoCardProps) => {
  const { img, matched } = card;
  const [flipped, setFlipped] = useState(matched);
  const [content, setContent] = useState(CARD_BACK_CONTENT);

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
    const newContent = flipped || matched ? { image: img, alt: 'Card' } : CARD_BACK_CONTENT;
    setTimeout(() => setContent(newContent), 100);
  }, [flipped, matched, img]);

  return (
    <Grid item xs={3}>
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
        <CardActionArea disabled={disabled}>
          <CardMedia component="img" image={content.image} alt={content.alt} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MemoCard;
