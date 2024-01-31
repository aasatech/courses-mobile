import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import HeadLine from '../../ui/HeadLine';
import {GColor} from '../../../constants/Theme/Global';

export default function ListTile({
  leading,
  title = 'header',
  subTitle = 'This is a body',
  textColor = 'black',
  titeColor = GColor.primary500,
  listStyle,
  trailing,
  description,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: titeColor,
        },
        listStyle,
      ]}>
      <View style={{flex: 1}}>{leading}</View>
      <View style={{flex: 5}}>
        <HeadLine size={'md'} label={title} color={textColor} />
        <HeadLine size={'sm'} color={textColor} label={subTitle} />
        <HeadLine size={'sm'} color={textColor} label={description} />
      </View>
      {trailing}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 20,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
});
