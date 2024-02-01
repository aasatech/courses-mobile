/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function TabButton({
  id,
  txtColor = 'grey',
  bgColor = GColor.primary300,
  label = 'Software',
  onPress,
  selected = false,
  type = 'default',
}) {
  return (
    <Pressable
      onPress={() => onPress(id)}
      style={[
        styles.outerContainer,
        {backgroundColor: bgColor},

        selected && styles.selected,
        type !== 'default' && {
          backgroundColor: 'transparent',
          borderBottomWidth: !selected ? 0 : 2,
          borderRadius: 0,
          borderBottomColor: !selected ? GColor.accent300 : GColor.primary600,
        },
      ]}>
      <View>
        <Text
          style={[
            styles.txtColor,
            {
              color: txtColor,
            },
            selected && styles.textSelected,
            type !== 'default' && {
              color: !selected ? GColor.accent300 : GColor.primary600,
            },
          ]}>
          {label}
        </Text>
      </View>
    </Pressable>
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
