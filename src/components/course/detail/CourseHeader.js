import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeadLine from '../../ui/HeadLine';
import BadgeCourse from '../BadgeCourse';
import {GColor} from '../../../constants/Theme/Global';

export default function CourseHeader() {
  return (
    <View style={styles.outerContainer}>
      <View
        style={{
          marginBottom: 15,
        }}>
        <HeadLine size={'lg'} label="Mobile Development" />
      </View>

      <View style={styles.headerBarContainer}>
        <BadgeCourse
          align="right"
          iconName="star"
          text="5 stars"
          iconColor={GColor.primary500}
        />
        <BadgeCourse
          align="right"
          iconName="book"
          text="15 learners"
          iconColor={GColor.primary500}
        />
      </View>

      <View style={styles.headerBarContainer}>
        <BadgeCourse
          align="right"
          iconName="clock"
          text="5 hours"
          iconColor={GColor.primary500}
        />

        <BadgeCourse
          align="right"
          iconName="view-parallel"
          text="15 Chapters"
          iconColor={GColor.primary500}
        />
        <BadgeCourse
          align="right"
          iconName="view-parallel"
          text="5 Lessons"
          iconColor={GColor.primary500}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    borderBottomColor:'grey',
    borderBottomWidth:0.5,
    // padding:10
  },
  imgView: {
    width: '100%',
    height: 300,
  },
  headerBarContainer: {
    flexDirection: 'row',
    gap: 10,

    marginBottom: 10,
  },
});
