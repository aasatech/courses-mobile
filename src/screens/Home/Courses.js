/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import Layout from '../../components/ui/Layout';
import {
  ActivityIndicator,
  FlatList,
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
import SkeletonUI from '../../components/ui/Skeletoneffect';
import TabList from '../../components/course/TabList';
import WrapperComponent from '../../components/course/ModalPopUp';
import TopSkeletonBar from '../../components/ui/TopSkeletonBar';

export default function Courses({navigation}) {
  const courses = useSelector(store => store?.course);
  const flatRef = useRef(null);
  const [layout, setLayout] = useState('flex');
  const [isLoading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectCategories, setSelectCategories] = useState([]);
  const [selectTags, setSelectTags] = useState([]);
  const [reachBottom, setReachBottom] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    perPage: 5,
    currentPage: 1,
    next: 2,
    totalPage: 0,
    previous: 1,
  });
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
          <IconDisplay
            color={'black'}
            name={layout === 'card' ? 'list-outline' : 'grid-sharp'}
            size={22}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginHorizontal: 0}}
            onPress={() => onSelectCategories(null)}>
            <IconDisplay color={'black'} name="close-circle-sharp" size={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => setModalVisible(pre => !pre)}>
            <IconDisplay color={'black'} name="filter-sharp" size={25} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [layout]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      await dispatch(fetchCourses(pagination));
      await dispatch(fetchCourseCategories());
      await dispatch(fetchCourseTag());
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const fetchPagination = async params => {
    try {
      setReachBottom(true);
      setPagination(pre => ({...pre, currentPage: pagination.currentPage + 1})),
        await dispatch(fetchCourses(params));
    } catch (error) {
    } finally {
      // setReachBottom(false);
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
    if (selectTags.includes(tagid)) {
      setSelectTags(pre => {
        return pre.filter(pre => pre !== tagid);
      });
      return;
    }
    setSelectTags(pre => pre.concat(tagid));
  };

  useEffect(() => {
    handleRefreshPage();
    if (selectCategories.length > 0 || selectTags.length > 0) {
      dispatch(filterCourses(null, true, selectCategories, selectTags));
      return;
    }

    fetchCourse();
  }, [dispatch, selectCategories, selectTags]);

  const renderItem = item => {
    return <CourseItem data={item?.item} layout={layout} />;
  };

  const handleRefreshPage = () => {
    flatRef.current.scrollToOffset({offset: 0, animated: true});
    setPagination({
      total: 0,
      perPage: 5,
      currentPage: 1,
      next: 2,
      totalPage: 0,
      previous: 1,
    });
    fetchPagination({
      currentPage: 1,
      perPage: 5,
    });
  };
  async function handleLoadmore() {
    if (pagination.currentPage >= courses?.meta?.totalPage) {
      setReachBottom(false);
      return;
    }
    fetchPagination({
      currentPage: pagination.currentPage + 1,
      perPage: pagination.perPage,
    });
  }

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
        onEndReachedThreshold={0.5}
        data={courses?.courses}
        refreshing={false}
        ref={flatRef}
        onRefresh={handleRefreshPage}
        onEndReached={handleLoadmore}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        ListFooterComponent={() =>
          reachBottom && (
            <ActivityIndicator size={50} color={GColor.primary600} />
          )
        }
      />
    </Layout>
  );
}
