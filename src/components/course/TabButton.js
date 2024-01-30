import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function TabButton({
  id,
  txtColor = 'grey',
  bgColor = GColor.primary300,
  label = 'Software',
  onPress,
  selected = false,
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      style={[
        styles.outerContainer,
        {backgroundColor: bgColor},
        selected && styles.selected,
      ]}>
      <View>
        <Text
          style={[
            styles.txtColor,
            {
              color: txtColor,
            },
            selected && styles.textSelected,
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: GColor.primary300,
  },

  txtColor: {
    fontSize: 16,
    fontWeight: '500',
  },
  selected: {
    backgroundColor: GColor.primary500,
  },
  textSelected: {
    color: GColor.primary350,
  },
});
