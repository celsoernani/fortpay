import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './../../pages/Home/SliderEntry.style';

export default class SliderEntry extends Component {
  render() {
    console.log(this.props);
    const {
      data: {title, subtitle, icon, navigate, titleNavigation},
    } = this.props;

    const uppercaseTitle = title ? (
      <Text style={styles.title} numberOfLines={2}>
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => navigate(titleNavigation)}>
        <View style={styles.shadow} />

        <View style={styles.textContainer}>
          <View style={{flexDirection: 'row'}}>
            {icon}
            <View>
              {uppercaseTitle}
              <Text style={styles.subtitle} numberOfLines={3}>
                {subtitle}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
