import { createAppContainer, createDrawerNavigator, DrawerItems, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Help from './pages/Help'

const Routes = createSwitchNavigator({
  Login,
  Help,


})



export default createAppContainer(Routes) 
