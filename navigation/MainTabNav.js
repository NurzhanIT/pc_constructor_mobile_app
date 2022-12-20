import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import News from "../screens/News";
import Store from "../screens/Store";
import UserPage from "../screens/UserPage";
const MainTab = createBottomTabNavigator();

const MainTabNav = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 1,
          backgroundColor: "#8fe1d7",
          borderRadius: 15,
          height: 50,
          ...styles.shadow,
        },
      }}
    >
      <MainTab.Screen name="news" component={News} />
      <MainTab.Screen name="store" component={Store} />
      <MainTab.Screen name="userpage" component={UserPage} />
    </MainTab.Navigator>
  );
};
export default MainTabNav;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
