import styled, { css } from "styled-components/native";

interface InputWrapperProps {
    isFocused: boolean;
    hasError: boolean;
}

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

export const InputWrapper = styled.View<InputWrapperProps>`
  border-width: 1px;
  border-radius: 8px;
  border-color: #d1d5db;
  background-color: #ffffff;

  ${({ isFocused }) =>
        isFocused &&
        css`
      border-color: #4f46e5;
    `}

  ${({ hasError }) =>
        hasError &&
        css`
      border-color: #dc2626;
    `}
`;

export const Input = styled.TextInput`
  height: 48px;
  padding: 0 12px;
  font-size: 16px;
  color: #111827;
`;

export const ErrorText = styled.Text`
  margin-top: 6px;
  font-size: 12px;
  color: #dc2626;
`;
