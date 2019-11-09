import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >

          <Text>teste</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
