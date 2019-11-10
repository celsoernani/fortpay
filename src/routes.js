import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  createst,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from './pages/Home';
import Login from './pages/Login';
import Help from './pages/Help';

const MainNavigation = createAppContainer(
  createStackNavigator(
    {
      Help: Help,
      Home: Home,
      Perfil: Home,
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          // headerLeft: (
          //   <View style={{justifyContent: 'center'}}>
          //     <Image
          //       style={{
          //         backgroundColor: 'transparent',
          //         tintColor: '#138646',
          //         width: 100,
          //         height: 40,
          //       }}
          //       source={require('./assets/logo.png')}
          //     />
          //   </View>
          // ),
          headerRight: (
            <View style={{ flexDirection: 'row' }}>
              <Icon
                style={{ marginRight: 20 }}
                name="message1"
                size={30}
                color="#138646"
              />
            </View>
          ),
          headerTitle: (
            <View style={{ justifyContent: 'center' }}>
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
