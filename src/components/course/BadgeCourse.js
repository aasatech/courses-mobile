import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import DynamicIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GColor} from '../../constants/Theme/Global';

export default function BadgeCourse({
  text = '2015',
  iconName = 'update',
  iconColor = 'black',
}) {
  return (
    <View style={styles.row}>
      <DynamicIcon name={iconName} size={20} color={iconColor} />
      <Text style={styles.textSt}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSt: {
    // color: GColor.secondary500,
    fontWeight: 'normal',
  },
  row: {
    flexDirection: 'row',
    gap: 5,
  },
});
