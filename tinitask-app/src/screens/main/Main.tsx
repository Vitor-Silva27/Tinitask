import { MainContainer, NestedTitle, Title, HeaderContainer } from "@app/styles/global";
import { TasksContainer } from "./components/tasksContainer/tasksContainer";
import { Button } from "@app/shared/components/button/Button";
import { Image, Text, View } from "react-native";
import { GhostButton } from "@app/shared/components/ghostButton/GhostButton";

export function Main() {
    return (
        <MainContainer>
            <HeaderContainer>
                <Title>Your <NestedTitle>to-do</NestedTitle> list</Title>
                <GhostButton text="Log out" iconSource={require('@assets/logout-icon.png')} />
            </HeaderContainer>
            <TasksContainer />
            <Button />
        </MainContainer>
    );
}