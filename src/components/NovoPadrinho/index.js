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
    name: 'Dona Maria',
    image: 'data:image/png;base64,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'

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
        <Text style={{alignSelf: 'center',fontSize: 20, marginTop: 10}}>{data[0].name} é sua nova afilhada</Text>

        <FlatList
          data={beneficios}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, id }) => {
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
