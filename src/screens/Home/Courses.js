/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Layout from '../../components/ui/Layout';
import {
  Button,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GColor} from '../../constants/Theme/Global';
import CourseItem from '../../components/course/CourseItem';
import IconDisplay from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCourseCategories,
  fetchCourseTag,
  fetchCourses,
  filterCourses,
  resetCourse,
} from '../../redux/reducers/courseReducer';
import {resetState} from '../../redux/reducers/authReducer';
import SkeletonUI from '../../components/ui/Skeletoneffect';
import TabList from '../../components/course/TabList';
import {fetchCategory} from '../../actions/courses/Category';
import WrapperComponent from '../../components/course/ModalPopUp';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import TopSkeletonBar from '../../components/ui/TopSkeletonBar';

export default function Courses({navigation}) {
  const courses = useSelector(store => store?.course);
  const [layout, setLayout] = useState('flex');
  const [isLoading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectCategories, setSelectCategories] = useState([]);
  const [selectTags, setSelectTags] = useState([]);
  const dispatch = useDispatch();

  const handleLayoutChange = () => {
    setLayout(pre => {
      if (pre === 'card') {
        return 'flex';
      }
      return 'card';
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Courses',
      headerShown: true,
      headerStyle: {
        backgroundColor: GColor.primary400,
      },
      presentation: 'modal',
      headerLeft: () => (
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={handleLayoutChange}>
          <IconDisplay name="grid-outline" size={20} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => setModalVisible(pre => !pre)}>
          <IconDisplay name="list" size={30} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      await dispatch(fetchCourses());
      await dispatch(fetchCourseCategories());
      await dispatch(fetchCourseTag());
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const onSelectCategories = id => {
    if (id === null) {
      setSelectCategories([]);
      setSelectTags([]);
      return;
    }
    if (selectCategories.includes(id)) {
      setSelectCategories(pre => {
        return pre.filter(pre => pre !== id);
      });
      return;
    }

    setSelectCategories(pre => pre.concat(id));
  };

  const handleSelectTag = tagid => {
    console.log(tagid);
    if (selectTags.includes(tagid)) {
      setSelectTags(pre => {
        return pre.filter(pre => pre !== tagid);
      });
      return;
    }
    setSelectTags(pre => pre.concat(tagid));
  };

  useEffect(() => {
    if (selectCategories.length > 0 || selectTags.length > 0) {
      dispatch(filterCourses(null, true, selectCategories, selectTags));
      return;
    }

    fetchCourse();
  }, [selectCategories, selectTags]);

  const renderItem = item => {
    return <CourseItem data={item?.item} layout={layout} />;
  };

  return (
    <Layout>
      <WrapperComponent
        setSelectedTag={handleSelectTag}
        selectedTag={selectTags}
        setModalVisible={setModalVisible}
        visible={isModalVisible}
      />

      {isLoading && (
        <>
          <View style={{marginBottom: 10}}>
            <TopSkeletonBar />
          </View>

          {Array.from({length: 10}, (item, index) => (
            <SkeletonUI key={index} />
          ))}
        </>
      )}

      <View style={{marginBottom: 20}}>
        <TabList
          selectCategories={selectCategories}
          onSelectCategories={onSelectCategories}
        />
      </View>

      <FlatList
        data={courses?.courses}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </Layout>
  );
}
