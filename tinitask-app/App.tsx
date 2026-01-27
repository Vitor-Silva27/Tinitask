import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@app/Navigation/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
