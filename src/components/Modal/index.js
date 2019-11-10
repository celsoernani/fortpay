import React, {Component} from "react";
import {TouchableOpacity,  Modal} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

export default class MoldalFP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render(){
        return (
            <Modal
              animationType={this.props.animation}
              transparent={this.props.transparent}
              visible={this.props.show}
              onRequestClose={this.props.hide}
            >
              <TouchableOpacity
                onPress={this.props.hide}
                hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}
              >
                <Icon name="close" size={32} color="white" style={{backgroundColor: "#138646"}}/>
              </TouchableOpacity>
                {this.props.component}
            </Modal>
        );
    }
}