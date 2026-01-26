import { LinkText, Title } from "@app/styles/global";
import { Container, EmptyImage, InfoText } from "./styles";
export function TasksContainer() {
    return (
        <Container>
            <EmptyImage source={require('@assets/empty-folder.png')} />    
            <Title>All Clear!</Title>
            <InfoText>Looks like you're all caught up.</InfoText>
            <LinkText>show completed tasks</LinkText>
        </Container>
    );
}