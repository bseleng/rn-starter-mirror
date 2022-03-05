import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListsScreen from "./src/screens/ListsScreen";
import ImagesScreen from "./src/screens/ImagesScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListsScreen,
    Images: ImagesScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
