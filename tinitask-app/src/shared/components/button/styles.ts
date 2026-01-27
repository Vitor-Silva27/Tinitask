import { colors } from "@app/shared/styles/colors";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${colors.primary};
    width: 100%;
    height: 70px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${colors.background};
    font-size: 18px;
`;