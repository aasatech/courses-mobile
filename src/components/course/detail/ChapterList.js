import React, {
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ListTile from './ListTile';
import {GColor} from '../../../constants/Theme/Global';
import LessonSection from './LessonSection';
import HeaderCourse from './HeaderCourse';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleCourse} from '../../../redux/reducers/courseReducer';
import {useRoute} from '@react-navigation/native';
import {baseUrl, rootUrl} from '../../../constants/Baseurl';

export default function ChapterList({onTap, tabItem, onChange}) {
  const store = useSelector(store => store.course);
  const courseDetail = store?.singleCourse;

  return (
    <FlatList
      ListHeaderComponent={<HeaderCourse onTap={onTap} tabItem={tabItem} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      data={courseDetail?.chapters}
      renderItem={item => (
        <View style={styles.itemContainer}>
          <ListTile
            listStyle={styles.itemStyle}
            title={`Chapter ${item?.index + 1} ${item.item?.name.slice(
              0,
              10,
            )}... `}
            subTitle={`${item.item?.lessons?.length} lessons`}
            description=""
            textColor={GColor.accent300}
          />
          <LessonSection data={item?.item} onSelectVideo={onChange} />
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
