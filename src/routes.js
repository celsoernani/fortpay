import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  createst,
} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Fatura from './pages/Fatura';
import Login from './pages/Login';
import Help from './pages/Help';
import Padrinhos from './pages/Padrinhos';

const MainNavigation = createAppContainer(
  createStackNavigator(
    {
      Home: Home,
      Help: Help,
      Perfil: Perfil,
      Fatura: Fatura,
      Padrinhos: Padrinhos,
    },
    {
      defaultNavigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
              style={{flexDirection: 'row'}}
              onPress={() => navigation.goBack()}>
              <Icon
                style={{marginLeft: 15}}
                name="left"
                size={25}
                color="#138646"
              />
            </TouchableOpacity>
          ),
          headerRight: (
            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
              style={{flexDirection: 'row'}}
              onPress={() => navigation.navigate('Perfil')}>
              <Icon2
                style={{marginRight: 15}}
                name="user"
                size={30}
                color="#138646"
              />
            </TouchableOpacity>
          ),

          headerTitle: (
            <View
              style={
                Platform.OS === 'ios'
                  ? {justifyContent: 'center'}
                  : {width: 100, height: 50, flex: 1, marginLeft: '30%'}
              }>
              <Image
                style={{
                  width: 100,
                  height: 50,
                }}
                source={require('./images/logo.png')}
              />
            </View>
          ),

          gesturesEnabled: true,
          headerStyle: {
            height: 70,
            backgroundColor: '#ffffff',
          },
        };
      },
    },
  ),
);

const Routes = createSwitchNavigator({
  Login,
  MainNavigation,
});

export default createAppContainer(Routes);
