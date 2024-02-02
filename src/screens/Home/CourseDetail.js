import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import {Dimensions} from 'react-native';
import Layout from '../../components/ui/Layout';
import {useIsFocused, useRoute} from '@react-navigation/native';
import TabBarHorizontal from '../../components/ui/TabBarHorizontal';
import {GColor} from '../../constants/Theme/Global';
import ChapterList from '../../components/course/detail/ChapterList';
import InstructorSection from '../../components/course/detail/InstructorSection';
import RatingSection from '../../components/course/detail/RatingSection';
import {fetchSingleCourse} from '../../redux/reducers/courseReducer';
import {useDispatch, useSelector} from 'react-redux';
import Video from 'react-native-video';
import FullScreenIcon from 'react-native-vector-icons/Ionicons';
import {rootUrl} from '../../constants/Baseurl';
import {SkeletonCourseDetail} from '../../components/course/detail/CourseDetailSkeleton';
import {height, width} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {BackHandler} from 'react-native';
import VideoModal from '../../components/course/detail/VideoModal';
export default function CourseDetail({navigation}) {
  const store = useSelector(store => store.course);
  const [isVideoLoading, setVideoLoading] = useState(true);
  const [onFullScreen, setOnFullScreen] = useState(false);

  const dispatch = useDispatch();
  const route = useRoute().params;
  const [tabIndex, setTapIndex] = useState(0);
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentThumbnail, setCurrentThumbnail] = useState('');
  const [chapterState, setChapterState] = useState({
    isLoading: false,
    isError: false,
    errorMessage: '',
  });
  const handleChangeVideo = (url, img) => {
    setCurrentVideo(url);
    setCurrentThumbnail(img);
  };
  console.log(currentVideo);
  const TabItem = [
    {
      id: 0,
      tabItem: 'Chapters',
      component: (
        <ChapterList
          onTap={onTap}
          tabItem={TabItem}
          onChange={handleChangeVideo}
        />
      ),
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

  const getSingleCourse = async () => {
    try {
      setChapterState(pre => ({...pre, isLoading: true}));
      await dispatch(fetchSingleCourse({id: route?.id}));
    } catch (error) {
      setChapterState(pre => ({...pre, isError: true, errorMessage: error}));
    } finally {
      setChapterState(pre => ({...pre, isLoading: false}));
    }
  };
  const onTap = useMemo(() => {
    return function (index) {
      setTapIndex(index);
    };
  }, []);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOnFullScreen(false);
      } else {
        setOnFullScreen(true);
      }
    });
  }, []);

  function pressBackButton() {
    setOnFullScreen(false);
    Orientation.lockToPortrait();
  }
  useLayoutEffect(() => {
    getSingleCourse();
  }, [route?.id]);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', pressBackButton);

    // Cleanup on component unmount
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', pressBackButton);
    };
  }, [onFullScreen]);
  const handleToggleFullScreen = () => {
    setOnFullScreen(pre => !pre);
  };

  if (chapterState?.isLoading) {
    return <SkeletonCourseDetail />;
  }

  if (onFullScreen) {
    return (
      <VideoModal
        currentThumbnail={currentThumbnail}
        currentVideo={currentVideo}
        img_url={store?.singleCourse?.image_url}
        video_url={store?.singleCourse?.video_url}
        onFullScreen={onFullScreen}
        handleToggleFullScreen={handleToggleFullScreen}
      />
    );
  }

  return (
    <Layout space={0}>
      <View>
        {!onFullScreen && (
          <View
            style={{
              height: 230,
              width: '100%',
            }}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri:
                  currentThumbnail ||
                  store?.singleCourse?.image_url ||
                  'https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </View>
        )}

        <Pressable
          style={
            !onFullScreen
              ? {position: 'absolute', alignSelf: 'center', top: 100}
              : {position: 'absolute', alignSelf: 'center', top: 0, right: 0}
          }
          onPress={handleToggleFullScreen}>
          <FullScreenIcon
            name={onFullScreen ? 'contract-sharp' : 'play-circle-sharp'}
            size={35}
            color="white"
          />
        </Pressable>
      </View>

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
  videoImg: {
    width: '100%',
    height: '100%',
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
  backgroundVideo: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
