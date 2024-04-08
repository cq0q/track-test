import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from "./src/navigationRef";


const switchNavigator = createSwitchNavigator ({
  loginFlow: createStackNavigator ({
    Signup: SignUpScreen,
    Signin: SignInScreen
  }),
  mainFlow: createMaterialBottomTabNavigator ({
    trackListFlow: createStackNavigator ({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});


const App = createAppContainer (switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  );     // if you didn't understand this line ( <App ref={(navigator) => { setNavigator(navigator) }} /> ) get back to lecture number 216 (Navigation From Outside of React)
};