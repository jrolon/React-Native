/*
/!*import {
    createStackNavigator, 
    createBottomTabNavigator 
} from "react-navigation";*!/
import {createStackNavigator, createAppContainer} from 'react-navigation';
import GenericScreen from "../Containers/GenericScreen";
import Navbar from "../Components/NavBar";


/!*const TabNav = createBottomTabNavigator(
    {
        Explore: { screen: GenericScreen },
        Categories: { screen: GenericScreen },
        Favorites: { screen: GenericScreen } 
    },
    {
        headerMode: "none",
        initialRouteName: "Explore"
    }
);*!/

/!*
const App = createStackNavigator(
    {
        Home: { screen: GenericScreen }
    },
    {
        headerMode: "none"
    }

);
*!/

const AppNavigator = createAppContainer(App);

export default AppNavigator;

*/
