import { MainContainer, NestedTitle, Title } from "@app/styles/global";
import { TasksContainer } from "./components/tasksContainer/tasksContainer";

export function Main() {
    return (
        <MainContainer>
            <Title>Your <NestedTitle>to-do</NestedTitle> list</Title>
            <TasksContainer />
        </MainContainer>
    );
}