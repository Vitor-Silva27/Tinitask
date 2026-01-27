import { MainContainer, NestedTitle, Title, HeaderContainer } from "@app/shared/styles/global";
import { TasksContainer } from "./components/tasksContainer/tasksContainer";
import { Button } from "@app/shared/components/button/Button";
import { Image, Text, View } from "react-native";
import { GhostButton } from "@app/shared/components/ghostButton/GhostButton";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";

export function Main() {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <MainContainer>
            <HeaderContainer>
                <Title>Your <NestedTitle>to-do</NestedTitle> list</Title>
                <GhostButton text="Log out" iconSource={require('@assets/logout-icon.png')} />
            </HeaderContainer>
            <TasksContainer />
            <Button onPress={() => navigation.navigate("createTask")} text="Add a new task" />
        </MainContainer>
    );
}