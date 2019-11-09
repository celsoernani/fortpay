import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './pages/Home';
import Login from './pages/Login';

const MainNavigation = createAppContainer(
  createBottomTabNavigator({
    Home: Home,
    Perfil: Home,
  }),
);

const Routes = createSwitchNavigator({
  Login,
  MainNavigation,
});

export default createAppContainer(Routes);
