import React, { useState } from "react";
import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";
import {Container, Input,InputWrapper, Label, ErrorText} from '@app/shared/components/formField/styles'

interface FormFieldProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function FormField({
  label,
  error,
  editable = true,
  onFocus,
  onBlur,
  ...rest
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(e: any) {
    setIsFocused(true);
    onFocus?.(e);
  }

  function handleBlur(e: any) {
    setIsFocused(false);
    onBlur?.(e);
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}

      <InputWrapper isFocused={isFocused} hasError={!!error}>
        <Input
          {...rest}
          editable={editable}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor="#9ca3af"
        />
      </InputWrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
