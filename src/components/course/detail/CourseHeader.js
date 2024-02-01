import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeadLine from '../../ui/HeadLine';
import BadgeCourse from '../BadgeCourse';
import {GColor} from '../../../constants/Theme/Global';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';

export default function CourseHeader() {
  const state = useSelector(store => store.course);
  const course = state.singleCourse;
  return (
    <View style={styles.outerContainer}>
      <View
        style={{
          marginBottom: 15,
        }}>
        <HeadLine size={'lg'} label={course?.name} />
      </View>

      <View style={styles.headerBarContainer}>
        <BadgeCourse
          align="right"
          iconName="form-select"
          text={course?.category?.name}
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
          text={dayjs()
            .millisecond(course?.created_at ?? '')
            .format('DD-MM-YYYY')}
          iconColor={GColor.primary500}
        />

        <BadgeCourse
          align="right"
          iconName="view-parallel"
          text={`${course.chapters?.length} Chapters`}
          iconColor={GColor.primary500}
        />
        <BadgeCourse
          align="right"
          iconName="view-parallel"
          text={`${course.chapters?.length} Chapters`}
          iconColor={GColor.primary500}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
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
