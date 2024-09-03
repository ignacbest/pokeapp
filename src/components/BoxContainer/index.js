import React from 'react';
import { Box } from 'native-base';

const BoxContainer = ({
  children,
}) => {
  return (
    <Box
      flex={1}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;