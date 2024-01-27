/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useLayoutEffect, useState} from 'react';

import {GColor} from '../constants/Global';
import ImageSlider from '../test/ImageSlider';
import ImagePicker from '../test/ImagePicker';
import MapBuild from '../test/MapBuild';
import Geolocation from '../test/Geolocation';
import MapViewCustom from '../test/MapView';
import Deeplink from '../test/Deeplink';

//This is a test navigation not part of the project
export default function TestNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Geolocation"
      screenOptions={{
        headerStyle: {
          backgroundColor: GColor.primary500,
        },
      }}>
      <Stack.Screen name="Slider" component={ImageSlider} />
      <Stack.Screen name="Camera" component={ImagePicker} />
      <Stack.Screen name="Carousel" component={SnapCarousel} />
      <Stack.Screen name="Map" component={MapBuild} />
      <Stack.Screen name="Geolocation" component={Geolocation} />
      <Stack.Screen
        name="ViewMap"
        component={MapViewCustom}
        options={{
          headerTitle: 'Map',
        }}
      />
      <Stack.Screen name="DeepLink" component={Deeplink} />

      {/* <Stack.Screen name="NativeCam" component={NativeCamera} /> */}
    </Stack.Navigator>
  );
}
