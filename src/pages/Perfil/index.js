import React, {Component} from 'react';

import {View, Image, Text, TouchableOpacity} from 'react-native';

import {
  Container,
  Header,
  Avatar,
  TextName,
  Card,
  TextSubtitle,
  TextCard,
} from './styles';
const data = [
  {
    id: 0,
    name: 'Dona Maria',
    image: 'https://avatars1.githubusercontent.com/u/50432110?s=460&v=4',
  },
];
export default class Perfil extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '24%',
        }}
      />
    );
  };

  render() {
    return (
      <Container>
        <View
          style={{
            flex: 2,
            backgroundColor: '#138646',
          }}>
          <Text
            style={{
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 30,
              color: 'white',
            }}>
            Meu Perfil
          </Text>
        </View>
        <Avatar source={require('./../../assets/donamria.png')} />
        <TextName>{data[0].name}</TextName>

        <View
          style={{
            marginTop: '20%',
            flex: 7,
          }}>
          <Text
            style={{alignSelf: 'center', fontFamily: 'normal', fontSize: 20}}>
            {'Seu código de identificação'}
          </Text>
          <Image
            source={require('./../../assets/qr_img.png')}
            style={{alignSelf: 'center'}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'normal',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {'WRYEV2BC'}
          </Text>
        </View>
      </Container>
    );
  }
}
