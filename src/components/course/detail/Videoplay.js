// import React from 'react'

// export default function Videoplay() {
//   return (
//     <VideoPlayer
//     paused={true} // Set this prop to true initially to prevent auto-play
//     repeat={true}
//     volume={10}
//     onVideoBuffer={() => setVideoLoading(false)}
//     onLoadStart={() => setVideoLoading(true)}
//     onVideoLoad={() => setVideoLoading(false)}
//     onLoad={() => {
//       videoRef?.current?.seek(1);
//     }}
//     source={{
//       uri: store?.singleCourse?.video_url,
//     }}
//     onExitFullscreen={() => {
//       setOnFullScreen(pre => !pre);
//     }}
//     onEnterFullscreen={() => {
//       setOnFullScreen(pre => !pre);
//     }}
//     onBack={() => {
//       if (onFullScreen === false) {
//         navigation.goBack();
//         return;
//       }
//       setOnFullScreen(pre => !pre);
//     }}
//     ref={videoRef}
//     toggleResizeModeOnFullscreen={false}
//     hideControlsOnStart={true}
//     loop={true}
//     disableFullscreen={false}
//     controlTimeout={5000}
//   />
//   )
// }
