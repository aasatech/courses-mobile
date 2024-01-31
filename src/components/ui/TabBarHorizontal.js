/* eslint-disable react/self-closing-comp */
import {TabActions} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TabButton from '../course/TabButton';

export default function TabBarHorizontal({
  tabItem,
  tabLength = 2,
  onTap,
  selectedTap,
}) {
  return (
    <FlatList
      scrollEnabled={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={false}
      data={tabItem}
      key={item => item.id}
      renderItem={item => (
        <View style={{marginRight: 10, justifyContent: 'space-around'}}>
          <TabButton
            label={item.item?.tabItem}
            selected={item.index === selectedTap}
            onPress={() => onTap(item.index)}
            type="outlined"
          />
        </View>
      )}></FlatList>
  );
}
const style = StyleSheet.create({});
