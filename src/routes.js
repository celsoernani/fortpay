import { createAppContainer, createDrawerNavigator, DrawerItems, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Home from './pages/Home'
import Login from './pages/Login'

const Routes = createSwitchNavigator({
  Login,
  Home,


})



export default createAppContainer(Routes) 
