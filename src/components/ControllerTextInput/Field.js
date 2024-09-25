import React, { forwardRef } from 'react';

import { MaskService } from 'react-native-masked-text';

import SingleInput from '../SingleInput';

const Field = forwardRef(({
  mask,
  onChangeText,
  ...rest
}, ref) => {

  const onChangeTextInput = (e) => {
    let newValue = e;
    if (mask) {
      newValue = MaskService.toMask(
        'custom',
        newValue,
        {
          mask
        }
      );
    }
    onChangeText(newValue);
  };

  return (
    <SingleInput
      ref={ref}
      onChangeText={onChangeTextInput}
      {...rest}
    />
  );
});

export default Field;