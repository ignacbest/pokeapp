import React, { forwardRef } from 'react';
import { View, Input, Text } from 'native-base';

import styles from './styles';
import RemovableView from '../RemovableView';

const SingleInput = forwardRef((props, ref) => {
  const {
    label,
    variant,
    containerStyle,
    value,
    error,
    errorText,
    inputStyle,
    multiline,
    labelColor,
    labelFontSize,
    ...rest
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <RemovableView hidden={!label}>
        <Text
          color={labelColor}
          fontSize={labelFontSize}
          paddingBottom={2}
        >
          {label}
        </Text>
      </RemovableView>
      <Input
        ref={ref}
        variant="underlined"
        value={value}
        isInvalid={error}
        style={[
          styles.input,
          inputStyle,
        ]}
        borderColor="primary.400"
        placeholderTextColor="#a3a5a8"
        _focus={{
          ...inputStyle,
        }}
        _invalid={styles.invalid}
        multiline={multiline}
        {...rest}
      />
      <RemovableView hidden={!error || !errorText}>
        <Text sub fontSize="sm" style={styles.errorText}>
          {errorText}
        </Text>
      </RemovableView>
    </View>
  );
});

export default SingleInput;