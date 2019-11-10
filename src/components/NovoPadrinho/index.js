import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {
  Container,
  Header,
  Avatar,
  TextName,
  ChatLabel,
  IconContainer,
  Title,
  TitleContainer
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const data = [
  {
    id: 0,
    name: 'Luan Borges',
    image: 'https://avatars1.githubusercontent.com/u/50432110?s=460&v=4'

  },
]

const beneficios = [
  {
    id: 0,
    name: 'Ajudar pessoas gera pontos.',
    description: 'Voce ganha pontos a cada ajuda que fornece aos seus afilhados!'

  },
  {
    id: 1,
    name: 'O que posso fazer com os pontos?',
    description: 'Os pontos podem ser retornados a você em forma de descontos em compras, milhas para viagens e muito mais!'

  },
  {
    id: 2,
    name: 'Incentive essa rede!',
    description: 'Quanto mais você ajuda, mais digitalizada será sua região!'

  },
]

export default class NovoPadrinho extends Component {
  state = {
    loading: false,
    modal: false,
  }

  onSuccess = (e) => {
    this.setState({color: 'black'})
  }

  toggleModal = () => {
    this.setState({modal: !this.state.modal})
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          alignSelf: 'center'
        }}
      />
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white',}}>
        <Avatar style={{alignSelf: 'center', marginTop: 10}} source={{ uri: data[0].image }} />
        <Text style={{alignSelf: 'center',fontSize: 20, marginTop: 10}}>{data[0].name} é seu novo afilhado!</Text>

        <FlatList
          data={beneficios}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, id }) => {
            console.tron.log('teste', item)
            return (
              <TouchableOpacity>
                <View
                  key={id}
                  style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}
                >
                  <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
                    <TextName>{item.name}</TextName>
                    <Text style={{alignSelf: 'center'}}>{item.description}</Text>
                  </View>

                </View>
              </TouchableOpacity>

            )
          }}
        />
      </View>
    );
  }
}
