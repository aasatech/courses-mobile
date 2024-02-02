import React, {useEffect, useRef} from 'react';
import {Pressable, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video';
import FullScreenIcon from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-controls';
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
        // If currently in fullscreen, exit fullscreen
        videoRef.current.dismissFullscreenPlayer();
      } else {
        Orientation.lockToLandscape();
        // If not in fullscreen, request fullscreen
        videoRef.current.presentFullscreenPlayer();
      }

      // Toggle the fullscreen state
      handleToggleFullScreen();
    }
  };
  const videoRef = useRef(null);

  useEffect(() => {
    Orientation.lockToLandscape();
  }, [onFullScreen]);
  return (
    <View>
      {video_url && (
        <Video
          style={{
     
            width: '100%',
            height: '100%',
          }}
          // repeat={true}
          paused={!onFullScreen}
          playInBackground
          controls={true}
          poster={
            currentThumbnail ||
            img_url ||
            'https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          onEnd={handlePress}
          posterResizeMode={'cover'}
          fullscreen={onFullScreen}
          
   
          source={{
            uri: currentVideo || video_url,
          }}
          resizeMode="cover"
          ref={videoRef}
          // onBuffer={{}}
        />
      )}

      <Pressable
        style={
          !onFullScreen
            ? {position: 'absolute', alignSelf: 'center', top: 100}
            : {position: 'absolute', alignSelf: 'center', top: 0, right: 0}
        }
        onPress={handlePress}>
        <FullScreenIcon
          name={onFullScreen ? 'contract-sharp' : 'play-circle-sharp'}
          size={25}
          color="white"
        />
      </Pressable>
    </View>
  );
}
