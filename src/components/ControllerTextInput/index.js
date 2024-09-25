import React from 'react';
import { Controller } from 'react-hook-form';

import Field from './Field';

const ControllerTextInput = ({
  control,
  name,
  rules,
  showError,
  ...textInputProps
}) => {

  const renderInput = ({
    field: {
      onChange,
      onBlur,
      value,
      name: inputName,
      ref,
    },
    fieldState: {
      invalid,
      error,
    },
  }) => 
  {
    return (
      <Field
        ref={ref}
        name={inputName}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        error={error && invalid}
        errorText={error && invalid ? error.message : null}
        {...textInputProps}
      />
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      render={renderInput}
      rules={rules}
    />
  );
};

export default ControllerTextInput;