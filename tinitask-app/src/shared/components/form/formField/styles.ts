import { colors } from "@app/shared/styles/colors";
import styled from "styled-components/native";


export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
  color: #374151;
`;

export const InputWrapper = styled.View`
  border-bottom-width: 2px;
  border-radius: 6px;
  border-color: ${colors.textGray};
`;

export const ErrorText = styled.Text`
  margin-top: 6px;
  font-size: 12px;
  color: #dc2626;
`;
