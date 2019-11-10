import React, { Component } from 'react';

import { View, FlatList, Text, TouchableOpacity } from 'react-native';

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
  {
    id: 1,
    name: 'José joão',
    image: 'https://avatars3.githubusercontent.com/u/16090350?s=460&v=4'

  },
  {
    id: 2,
    name: 'Celso Sales',
    image: 'https://avatars0.githubusercontent.com/u/27322580?s=460&v=4'

  },
  {
    id: 3,
    name: 'Bill Gates',
    image: 'https://image.cnbcfm.com/api/v1/image/106216476-1572545404537gettyimages-1151703682.jpeg?v=1572545446&w=1400&h=950'

  },
  {
    id: 4,
    name: 'Steve Jobs',
    image: 'https://imagens.canaltech.com.br/celebridades/2.400.jpg'
  },
]
export default class Help extends Component {

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "24%"
        }}
      />
    );
  };

  render() {
    return (
      <Container>
        <FlatList
          data={data}
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
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar source={{ uri: item.image }} />
                    <TextName>{item.name}</TextName>
                  </View>
                  <IconContainer>
                    <Icon name='chat' size={30} style={{ marginRight: 8 }} color='#00000080' />
                    <ChatLabel>Chat</ChatLabel>
                  </IconContainer>
                </View>
              </TouchableOpacity>

            )
          }}
        />



      </Container>
    );
  }
}
