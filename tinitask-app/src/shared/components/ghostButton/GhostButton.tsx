import { Image, Text, View } from "react-native";
import { GhostButtonContainer } from "./styles";

interface GhostButtonProps {
    text: string;
    iconSource: any;
}

export function GhostButton({ text, iconSource }: GhostButtonProps) {
    return (
        <GhostButtonContainer>
            <Text>{text}</Text>
            <Image source={iconSource} />
        </GhostButtonContainer>
    );
}