import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Container} from './styles';

export default class Camera extends Component {
  state = {
    loading: false,
  }

  onSuccess = (e) => {
    this.setState({color: 'black'})
  }

  render() {
    return (
      <Container>
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
