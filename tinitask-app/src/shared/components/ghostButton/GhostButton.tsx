import { Image, Text, View } from "react-native";
import { GhostButtonContainer } from "./styles";

interface GhostButtonProps {
    text: string;
    iconSource: any;
    inverted?: boolean;
    onPress?: () => void;
}

export function GhostButton({ text, iconSource, inverted = false, onPress }: GhostButtonProps) {
  return (
    <GhostButtonContainer onPress={onPress}>
      {inverted ? (
        <>
          <Image source={iconSource} />
          <Text>{text}</Text>
        </>
      ) : (
        <>
          <Text>{text}</Text>
          <Image source={iconSource} />
        </>
      )}
    </GhostButtonContainer>
  );
}