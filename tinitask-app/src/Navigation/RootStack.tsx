import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Main} from '@app/screens/main/Main';
import { CreateTask } from "@app/screens/createTask/CreateTask";
const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="createTask" component={CreateTask} />
    </Stack.Navigator>
  );
}