import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Layout from '../../components/ui/Layout';
import {useIsFocused} from '@react-navigation/native';
import {routeApp} from '../../routes/Routes';
import CourseHeader from '../../components/course/detail/CourseHeader';
import HeadLine from '../../components/ui/HeadLine';
import AvatarHeader from '../../components/course/detail/ListTile';
import ListTile from '../../components/course/detail/ListTile';
import TabList from '../../components/course/TabList';
import TabBarHorizontal from '../../components/ui/TabBarHorizontal';
import {GColor} from '../../constants/Theme/Global';
import {ScrollView} from 'react-native-gesture-handler';
import ChapterList from '../../components/course/detail/ChapterList';
import InstructorSection from '../../components/course/detail/InstructorSection';
import RatingSection from '../../components/course/detail/RatingSection';

export default function CourseDetail({navigation}) {
  const isFocused = useIsFocused();
  const [tabIndex, setTapIndex] = useState(0);
  const TabItem = [
    {
      id: 0,
      tabItem: 'Chapters',
      component: <ChapterList onTap={onTap} tabItem={TabItem} />,
    },
    {
      id: 1,
      tabItem: 'Instructor',
      component: <InstructorSection />,
    },
    {
      id: 2,
      tabItem: 'Rating',
      component: <RatingSection />,
    },
  ];
  const onTap = useMemo(() => {
    return function (index) {
      setTapIndex(index);
    };
  }, []);
  return (
    <Layout space={0}>
      <Image
        style={styles.imgView}
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <View>
        <TabBarHorizontal
          onTap={onTap}
          tabItem={TabItem}
          selectedTap={tabIndex}
        />
      </View>

      {TabItem[tabIndex]?.component}
    </Layout>
  );
}
const styles = StyleSheet.create({
  imgView: {
    width: '100%',
    height: 300,
  },
  descriptionText: {
    textAlign: 'justify',
    color: GColor.grey500,
    lineHeight: 25,
  },
  bodyContainer: {
    padding: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
