import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import MainTabNav from "./MainTabNav";
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTab"
          options={{ headerShown: false }}
          component={MainTabNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
