import React, { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  Input,
  Text,
  Icon
} from 'native-base';

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
    onSubmit,
    ...rest
  } = props;


  const renderIconSearch = () => {
    return (
      <TouchableOpacity onPress={onSubmit}>
        <Icon
          as={MaterialIcons}
          name="search"
          size="xl"
          color="gray.400"
        />
      </TouchableOpacity>
    )
  }

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
        InputRightElement={renderIconSearch()}
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