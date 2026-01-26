import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { MainContainer } from './src/styles/global';
import { Main } from './src/screens/main/Main';

export default function App() {
  return (
    <MainContainer>
      <Main />
      <StatusBar style="auto" />
    </MainContainer>
  );
}
