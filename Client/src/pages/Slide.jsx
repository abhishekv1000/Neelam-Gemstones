import React from 'react';
import { Box, Typography, styled, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Slide = ({ items }) => {
  // Log incoming items to debug data shape
  console.log('Slide items:', items);

  // Make sure items is always an array to prevent .map errors
  const data = Array.isArray(items) ? items : [];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === data.length - 1 ? 0 : prev + 1));
  };

  if (data.length === 0) {
    return (
      <Typography sx={{ textAlign: 'center', marginTop: 4 }}>
        No items to display
      </Typography>
    );
  }

  const currentItem = data[currentIndex];

  return (
    <Container>
      <ArrowButton onClick={handlePrev} aria-label="previous">
        <ArrowBackIos />
      </ArrowButton>

      <Content>
        <Image
          src={currentItem.productImage || currentItem.image || ''}
          alt={currentItem.productName || currentItem.name || 'Image'}
          loading="lazy"
        />
        <Name>{currentItem.productName || currentItem.name || 'Unnamed Item'}</Name>
      </Content>

      <ArrowButton onClick={handleNext} aria-label="next">
        <ArrowForwardIos />
      </ArrowButton>
    </Container>
  );
};

export default Slide;

// Styled components
const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const ArrowButton = styled(IconButton)`
  background-color: #e0e0e0;
  &:hover {
    background-color: #bdbdbd;
  }
`;

const Content = styled(Box)`
  text-align: center;
  max-width: 300px;
`;

const Image = styled('img')`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const Name = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
`;
