import { GhostButton } from "@app/shared/components/ghostButton/GhostButton";
import { HeaderContainer, MainContainer } from "@app/shared/styles/global";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export function CreateTask() {
    const navigation = useNavigation();
  return (
    <MainContainer>
      <HeaderContainer>
        <GhostButton text="Cancel" inverted iconSource={require('@assets/arrow-back.png')} onPress={() => navigation.goBack()} />
      </HeaderContainer>
      <View><Text>Create Task Screen</Text></View>
    </MainContainer>
  );
}