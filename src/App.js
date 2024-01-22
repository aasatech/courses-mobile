import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import MainNavigation from './navigation/MainNavigation';

import {Provider, useSelector} from 'react-redux';
import {store} from './store/centralStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
 
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
