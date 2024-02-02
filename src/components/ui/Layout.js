import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function Layout({children, space = 20}) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          padding: space,
        },
      ]}>
      <StatusBar showHideTransition={'fade'}
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GColor.primary400,
  },
});
