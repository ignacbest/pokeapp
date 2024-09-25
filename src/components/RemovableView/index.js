import React from 'react';
import { View } from 'react-native';

const RemovableView = ({
  children,
  hidden,
  ...rest
}) => {
  if (hidden) {
    return <View />;
  }
  return (
    <View {...rest}>
      {children}
    </View>
  );
};

export default RemovableView;