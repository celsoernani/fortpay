import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Container} from './styles';
import MoldalFP from '../Modal'
import NovoPadrinho from '../NovoPadrinho'

export default class Camera extends Component {
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

  render() {
    return (
      <Container>
        <QRCodeScanner
            onRead={this.toggleModal}
            cameraStyle={{flex: 1}}
            containerStyle={{margin: 0, padding: 0}}
            showMarker={true}
        />
        <MoldalFP
          animation="slide"
          transparent={false}
          show={this.state.modal}
          hide={this.toggleModal}
          component={<NovoPadrinho />}
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
