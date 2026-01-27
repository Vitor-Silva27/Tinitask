import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps {
    onPress?: () => void;
    text: string;
}

export function Button({ onPress, text }: ButtonProps) {
    return <ButtonContainer onPress={onPress}><ButtonText>{text}</ButtonText></ButtonContainer>;
}