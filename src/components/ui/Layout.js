import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function Layout({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,

    flex: 1,
    backgroundColor: GColor.primary400,
  },
});
