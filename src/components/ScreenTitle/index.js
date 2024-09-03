import React from 'react';
import { useColorModeValue, Heading } from 'native-base';
import { PropTypes } from 'prop-types';

const ScreenTitle = ({
  children,
  color,
  size,
  ...rest
}) => {
  const textColor = color || useColorModeValue('secondary.800', 'secondary.100');
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

ScreenTitle.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

ScreenTitle.defaultProps = {
  color: null,
  size: 'xl',
};

export default ScreenTitle;