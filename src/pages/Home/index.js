import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './SliderEntry.style';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/UYiroysl.jpg',
        },
        {
          title: 'Earlier this morning, NYC',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
        },
        {
          title: 'White Pocket Sunset',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
          illustration: 'https://i.imgur.com/MABUbpDl.jpg',
        },
        {
          title: 'Acrocorinth, Greece',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
        },
        {
          title: 'The lone tree, majestic landscape of New Zealand',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
        },
        {
          title: 'Middle Earth, Germany',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/lceHsT6l.jpg',
        },
      ],
    };
  }
  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1%',
              }}>
              <Image
                style={{
                  backgroundColor: 'transparent',
                  tintColor: 'white',
                  width: 100,
                  height: 40,
                }}
                source={require('./../../assets/logo.png')}
              />

              <View style={{flexDirection: 'row', marginRight: '2%'}}>
                <TouchableOpacity
                  style={{backgroundColor: 'white', height: '60%'}}>
                  <Icon name="qrcode" size={30} color="#01261C" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon
                    style={{marginLeft: 20}}
                    name="message1"
                    size={30}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 22,
                marginTop: '10%',
                marginLeft: '3%',
                color: 'white',
              }}>
              Maria de Lurdes{' '}
            </Text>
            <View style={{height: 3, backgroundColor: '#01261C'}}></View>
          </View>

          <View style={{flex: 7, backgroundColor: 'white'}}>
            <Image
              style={{
                alignSelf: 'center',
                marginTop: '10%',
                borderColor: '#09A603',
                borderWidth: 1,
              }}
              source={require('./../../assets/qr_img.png')}
            />

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
        </ScrollView>
      </SafeAreaView>
    );
  }
}
