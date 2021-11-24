import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ScreenSearch from './src/Screen/ScreenSearch';
import SearhBar from "./src/Screen/SearchBar";

const navigator = createStackNavigator(
  {
    Search: ScreenSearch,
    SearchBar:SearhBar
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Test Search'
    }
  });

export default createAppContainer(navigator);