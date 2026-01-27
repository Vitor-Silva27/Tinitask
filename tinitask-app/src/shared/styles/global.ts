import styled from 'styled-components/native';
import { colors } from '@app/shared/styles/colors';
export const MainContainer = styled.View`
    flex: 1;
    background-color: ${colors.background};
    padding: 80px 40px;
    `;

export const HeaderContainer = styled.View`
    flex-direction: row;
    margin-bottom: 32px;
    justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.black};
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