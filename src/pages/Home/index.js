import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Tabs from './../../components/Tabs/index';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import SliderEntry from './../../components/Home/SliderEntry';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import MoldalFP from '../../components/Modal'
import Camera from '../../components/Camera'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalApadrinhar: false,
      entries: [
        {
          title: 'Minhas Faturas',
          subtitle:
            'Veja aqui os detalhes das suas faturas e tire suas dúvidas',
          icon: (
            <Icon1
              name={'file-document-box-multiple-outline'}
              size={25}
              style={{ alignSelf: 'center', marginRight: 10 }}
              color="white"
            />
          ),
          navigate: this.props.navigation.navigate,
          titleNavigation: 'Fatura',
        },
        {
          title: 'Meus Padrinhos',
          subtitle: 'Veja aqui pessoas de confiança que podem te ajudar.',
          icon: (
            <Icon2
              name={'users'}
              size={25}
              style={{ alignSelf: 'center', marginRight: 10 }}
              color="white"
            />
          ),
          navigate: this.props.navigation.navigate,
          titleNavigation: 'Padrinhos',
        },
        {
          title: 'Precisa de ajuda ?',
          subtitle: 'Encontre em seus contatos pessoas que possam te ajudar.',
          icon: (
            <Icon3
              name={'handshake-o'}
              size={25}
              style={{ alignSelf: 'center', marginRight: 10 }}
              color="white"
            />
          ),
          navigate: this.props.navigation.navigate,
          titleNavigation: 'Help',
        },
        {
          title: 'Apadrinhar alguém',
          subtitle: 'Ajude pessoas a mehorar a experiência dentro do aplicativo. Ajudar pessoas gera pontos.',
          icon: (
            <Icon3
              name={'gg'}
              size={25}
              style={{alignSelf: 'center', marginRight: 10}}
              color="white"
            />
          ),
          modal: this.toggleModalShowModalApadrinhar
        },
      ],
    };
  }

  toggleModalShowModalApadrinhar = () => {
    this.setState({showModalApadrinhar: !this.state.showModalApadrinhar})
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <View style={styleshado.shadow}>
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Tabs />

            <View style={styles.exampleContainer}>
              <Carousel
                ref={c => (this._slider1Ref = c)}
                data={this.state.entries}
                renderItem={this._renderItemWithParallax}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
              />
            </View>
          </View>
          <MoldalFP
            animation="slide"
            transparent={false}
            show={this.state.showModalApadrinhar}
            hide={this.toggleModalShowModalApadrinhar}
            component={<Camera />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.8,
    shadowRadius: 0.8 * elevation
  };
}

const styleshado = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(2),
    backgroundColor: 'white', // It'll look weird without a background color!
    borderRadius:10
  }
});

