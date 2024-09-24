import React from 'react';
import { useColorModeValue, Heading } from 'native-base';

const ScreenTitle = ({
  children,
  color,
  size,
  ...rest
}) => {
  const textColor = color || useColorModeValue('red.400', 'red.200');
  return (
    <Heading
      size={size}
      fontFamily="heading"
      color={textColor}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default ScreenTitle;