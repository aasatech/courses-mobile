import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function Button({
  label = 'Press Me',
  onPress,
  bgColor,
  ...props
}) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: bgColor,
        },
      ]}
      onPress={onPress}>
      <View>
        <Text style={styles.textLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textLabel: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: GColor.secondary100,
  },
  buttonContainer: {
    backgroundColor: GColor.primary500,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal:10
  },
});
