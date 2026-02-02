import { GhostButton } from "@app/shared/components/ghostButton/GhostButton";
import { HeaderContainer, MainContainer, Title, NestedTitle } from "@app/shared/styles/global";
import { useNavigation } from "@react-navigation/native";
import { CreateTaskForm } from "./form/CreateTaskForm";

export function CreateTask() {
  const navigation = useNavigation();
  return (
    <MainContainer>
      <HeaderContainer>
        <GhostButton text="Cancel" inverted iconSource={require('@assets/arrow-back.png')} onPress={() => navigation.goBack()} />
      </HeaderContainer>
      <Title>Add a new <NestedTitle>Task</NestedTitle></Title>
      <CreateTaskForm onSubmit={(data) => { console.log(data) }} />
    </MainContainer>
  );
}