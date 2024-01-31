import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListTile from './ListTile';
import {GColor} from '../../../constants/Theme/Global';
import LessonSection from './LessonSection';
import HeaderCourse from './HeaderCourse';

export default function ChapterList({onTap, tabItem}) {
  const data = [1, 2, 3, 4, 5, 6, 7, 10];

  function toggleChapter() {}
  return (
    <FlatList
      ListHeaderComponent={<HeaderCourse onTap={onTap} tabItem={tabItem} />}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={item => (
        <View style={styles.itemContainer}>
          <ListTile
            listStyle={styles.itemStyle}
            title="Chapter 1 Intro "
            subTitle="5 lessons"
            description=""
            textColor={GColor.accent300}
          />
          <LessonSection />
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
  },
  itemStyle: {
    backgroundColor: GColor.primary300,
    borderRadius: 0,
    marginHorizontal: 1,
  },
});
