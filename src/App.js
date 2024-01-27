import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {enableLatestRenderer} from 'react-native-maps';
import {Provider} from 'react-redux';
import {persistance, store} from './redux/centralStore';
import {PersistGate} from 'redux-persist/integration/react';
export default function App() {
  enableLatestRenderer();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistance} loading={null}>
        <NavigationContainer>
          <MainNavigation />

          {/* <TestNavigation /> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
