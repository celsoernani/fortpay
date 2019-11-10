import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { Container, Form, Input, Submit, SubmitText, Loading } from './styles';

export default class Login extends Component {
  state = {
    loading: false
  }
  handleLogin = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    }, 200);

  }
  render() {
    return (
      <Container>
        <Image
          // resizeMethod='resize'
          style={{ width: 200, height: 100, marginTop: 30 }}
          source={require('../../images/logo.png')} />

        <Form>
          <Input
            // value={username}
            onChangeText={text => this.setState({ username: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Usuario'
          />
          <Input
            // value={password}
            textContentType='password'
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Senha'
          />
        </Form>
        <Submit onPress={() => this.handleLogin()}>
          {this.state.loading ? <Loading /> : <SubmitText>Entrar</SubmitText>}
        </Submit>
      </Container>
    );
  }
}
