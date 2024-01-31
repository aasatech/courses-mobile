import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function HeadLine({
  label = 'Do you like it',
  size,
  color = 'black',
  // lineHeight = 20,
}) {
  const getFontSize = () => {
    switch (size) {
      case 'sm':
        return styles.titlesm;
      case 'md':
        return styles.titlemd;
      case 'lg':
        return styles.titlelg;
      default:
        return styles.titleThin;
    }
  };

  return (
    <View>
      <Text style={[getFontSize(), {color: color}]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titlesm: {
    fontSize: 12,
    fontWeight: '400',
    color: GColor.accent300,
  },

  titlemd: {
    fontSize: 16,
    fontWeight: '500',
    color: GColor.accent300,
  },
  titlelg: {
    fontSize: 22,
    fontWeight: '500',
    color: GColor.accent300,
  },
  titleThin: {
    fontSize: 14,
    fontWeight: '400',
    color: GColor.accent300,
  },
});
