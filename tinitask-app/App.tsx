import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@app/Navigation/RootStack';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
