import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

// import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 2,
              backgroundColor: '#138646',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  backgroundColor: 'transparent',
                  tintColor: 'white',
                  width: 100,
                  height: 40,
                }}
                source={require('./../../assets/logo.png')}
              />

              <View style={{flexDirection: 'row', marginRight: '2%'}}>
                <TouchableOpacity
                  style={{backgroundColor: 'white', height: '60%'}}>
                  <Icon name="qrcode" size={30} color="#01261C" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon
                    style={{marginLeft: 20}}
                    name="message1"
                    size={30}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 22,
                marginTop: '10%',
                marginLeft: '3%',
                color: '#D9D9D9',
              }}>
              Maria de Lurdes{' '}
            </Text>
            <View style={{height: 3, backgroundColor: '#01261C'}}></View>
          </View>

          <View style={{flex: 8}}></View>
        </View>
      </SafeAreaView>
    );
  }
}
