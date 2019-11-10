import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Container, Form, Input, Submit, SubmitText, Loading } from './styles';

export default class Login extends Component {
  state = {
    loading: false,
    color: 'red'
  }
  handleLogin = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.props.navigation.navigate('Help')
    }, 2000);

  }

  onSuccess = (e) => {
    this.setState({color: 'black'})

  }

  render() {
    return (
      <Container>
        <Image
          // resizeMethod='resize'
          style={{ width: 200, height: 100, marginTop: 30 }}
          source={require('../../images/logo.png')} />
        <QRCodeScanner
        onRead={this.onSuccess}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      <Text style={{color: this.state.color}}>Teste</Text>
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

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
