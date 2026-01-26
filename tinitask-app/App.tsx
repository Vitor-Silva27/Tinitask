import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './src/styles/global';

export default function App() {
  return (
    <Container>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
