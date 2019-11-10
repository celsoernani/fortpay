import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import { createAppContainer, createSwitchNavigator, createst } from 'react-navigation';
import { createBottomTabNavigator, } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from './pages/Home';
import Login from './pages/Login';
import Help from './pages/Help';



const MainNavigation = createAppContainer(
  createStackNavigator({
    Home: Home,
    Perfil: Home,
    Help: Help
  }, {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <View>
              <Image
                style={{
                  backgroundColor: 'transparent',
                  tintColor: 'white',
                  width: 100,
                  height: 40,
                }}
                source={require('./assets/logo.png')}
              />
              <Text style={{
                marginLeft: 10,
                fontSize: 22,
                color: 'white',
              }} >
                Maria de Lurdes{' '}
              </Text>
            </View>
          ),
          headerRight: (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ backgroundColor: 'white', height: '60%' }}>
                <Icon name="qrcode" size={30} color="#01261C" />
              </TouchableOpacity>
              <Icon
                style={{ marginLeft: 20 }}
                name="message1"
                size={30}
                color="white"
              />
            </View>
          ),
          // headerTitle: (
          //   <HeaderTitleContainer />
          // ),
          gesturesEnabled: true,
          headerStyle: {
            height: 70,
            backgroundColor: '#138646',
          },

        }
      }
    }
  ),

);

const Routes = createSwitchNavigator({
  Login,
  MainNavigation,
});

export default createAppContainer(Routes);
