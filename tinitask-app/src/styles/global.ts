import styled from 'styled-components/native';
import { colors } from '@app/shared/colors';
export const MainContainer = styled.View`
    flex: 1;
    background-color: ${colors.background};
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
    `;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  margin-left: auto;
  margin-right: auto;
`;

export const NestedTitle = styled.Text`
  color: ${colors.primary};
`;

export const LinkText = styled.Text`
  color: ${colors.primary};
  text-decoration: underline;
  font-size: 16px;
  margin-top: 8px;
`;