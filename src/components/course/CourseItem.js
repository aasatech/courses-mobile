import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {GColor} from '../../constants/Theme/Global';
import HeadLine from '../ui/HeadLine';
import BadgeCourse from './BadgeCourse';
import dayjs from 'dayjs'
export default function CourseItem({data, layout = 'flex'}) {

  return (
    <View
      style={[styles.outerContainer, layout === 'card' && styles.outerCard]}>
      <View
        style={[
          {
            flex: 1,
          },
          layout === 'card' && {flex: 0},
        ]}>
        <Image
          source={{
            uri:
              data?.image_url ||
              'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={[
            {
              borderRadius: 10,
            },
            layout === 'card' && styles.imageCard,
          ]}
          height={100}
          resizeMode="cover"
        />
      </View>

      
      <View style={styles.detailCourse}>
        <HeadLine label={data?.name} size={'lg'} color={GColor.accent300} />
        <HeadLine color={'grey'} label={data?.summary} size={'sm'} />

        <View style={styles.courseState}>
          <BadgeCourse
            iconName="update"
            text={dayjs().millisecond(data?.created_at).format('DD-MM-YYYY')}
            iconColor={GColor.primary500}
          />
          <BadgeCourse
            iconName="star"
            text="4.5"
            iconColor={GColor.primary500}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  courseState: {
    flexDirection: 'row',
    gap: 15,
  },
  imageCard: {
    width: '100%',
    height: 150,
    borderRadius: 0,
  },
  outerContainer: {
    padding: 10,
    alignItems: 'center',
    gap: 12,
    marginVertical: 7,
    columnGap: 10,
    borderRadius: 7,
    backgroundColor: '#FFECAF',
    flexDirection: 'row',
  },
  outerCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    minHeight: 300,
    padding: 0,
  },

  detailCourse: {
    flex: 2,
    gap: 5,
    paddingHorizontal: 15,
  },
});
