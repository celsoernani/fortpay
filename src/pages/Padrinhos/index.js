import React, {Component} from 'react';

import {View, FlatList, Text, TouchableOpacity} from 'react-native';

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
    name: 'Luan Borges',
    image: 'https://avatars1.githubusercontent.com/u/50432110?s=460&v=4',
  },
];
export default class Padrinhos extends Component {
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
            Padrinho
          </Text>
        </View>
        <Avatar source={{uri: data[0].image}} />
        <TextName>{data[0].name}</TextName>

        <View
          style={{
            marginTop: '20%',
            flex: 7,
          }}>
          <Card>
            <TextCard>{'Sobre'}</TextCard>
            <TextSubtitle>
              {
                'Meu sobrinho que me ajuda a gerar meus boletos, ver e me avisar sobre meus vencimentos, além de me ajudar a entrar no mundo digital.'
              }
            </TextSubtitle>
          </Card>
        </View>
      </Container>
    );
  }
}
