import React, {useEffect, useRef} from 'react';
import {Pressable, StatusBar, StyleSheet, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video';
import FullScreenIcon from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-controls';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useField} from 'formik';
export default function VideoModal({
  onFullScreen,
  currentThumbnail,
  currentVideo,
  img_url,
  video_url,
  handleToggleFullScreen,
}) {
  const handlePress = () => {
    if (videoRef.current) {
      if (onFullScreen) {
        Orientation.lockToPortrait();
      } else {
        Orientation.lockToLandscape();
      }

      // Toggle the fullscreen state
      handleToggleFullScreen();
    }
  };
  const videoRef = useRef(null);

  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToLandscape();
    if (onFullScreen) {
      navigation.setOptions({
        header: () => null,
      });
    }
  }, [onFullScreen, navigation]);
  const handleBack = () => {
    handlePress();
    console.log('Back button pressed!');
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('Back button press prevented!');
      return true; // Returning true prevents the default back behavior
    });

    return () => BackHandler.removeEventListener('hardwareBackPress');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden />

      <VideoPlayer
        ref={videoRef}
        source={{uri: currentVideo || video_url}}
        resizeMode="cover"
        onBack={handleBack}
        onEnd={handlePress}
        style={styles.videoPlayer}
      />
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
