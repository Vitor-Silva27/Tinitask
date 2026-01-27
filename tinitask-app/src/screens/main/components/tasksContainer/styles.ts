import styled from 'styled-components/native';
import { colors } from '@app/shared/styles/colors/index';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const EmptyImage = styled.Image`
    width: 157px;
    height: 172px;
    margin-bottom: 16px;
`;

export const InfoText = styled.Text`
    font-size: 16px;
    color: ${colors.textGray};
`;