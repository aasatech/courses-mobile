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
} from '../../redux/reducers/courseReducer';
import {resetState} from '../../redux/reducers/authReducer';
import SkeletonUI from '../../components/ui/Skeletoneffect';
import TabList from '../../components/course/TabList';
import {fetchCategory} from '../../actions/courses/Category';

export default function Courses({navigation}) {
  const [layout, setLayout] = useState('flex');
  const [isLoading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const courses = useSelector(store => store?.course);
  const [selectCategories, setSelectCategories] = useState([]);
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
      const course = await dispatch(fetchCourses());
      const categories = await dispatch(fetchCourseCategories());
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const onSelectCategories = id => {
    console.log(id);
    if (selectCategories.includes(id)) {
      setSelectCategories(pre => {
        return pre.filter(pre => pre !== id);
      });
      return;
    }
    setSelectCategories(pre => pre.concat(id));
  };
  useEffect(() => {
    if (selectCategories.length > 0) {
      dispatch(filterCourses(null, true, selectCategories, []));
      return;
    }
    fetchCourse();
  }, [selectCategories]);

  const renderItem = item => {
    return <CourseItem data={item?.item} layout={layout} />;
  };

  console.log(selectCategories);
  console.log(courses?.courses?.length);
  return (
    <Layout>
      {isLoading &&
        Array.from({length: 10}, (item, index) => <SkeletonUI key={index} />)}

      <View style={{flex: 1}}>
        <Text>I am the modal content!</Text>
      </View>

      <View
        style={{
          marginVertical: 10,
        }}>
        <TabList
          selectCategories={selectCategories}
          onSelectCategories={onSelectCategories}
        />
      </View>
      {/* <Button title="Show modal" onPress={() => setModalVisible(pre => !pre)} /> */}

      <FlatList
        // ListHeaderComponent={<TabList />}
        data={courses?.courses}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      {/* <Modal isVisible={isModalVisible}>
        <View style={{}}>
          <Text>Hello!</Text>

          <Button
            title="Show modal"
            onPress={() => setModalVisible(pre => !pre)}
          />
        </View>
      </Modal> */}
    </Layout>
  );
}
