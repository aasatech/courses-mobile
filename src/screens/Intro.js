import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../components/ui/Layout';
import ButtonApp from '../components/ui/Button';
import {Routes, routeApp} from '../routes/Routes';
import AppLogo from '../components/AppLogo';

export default function Intro({navigation, route}) {
  return (
    <Layout>
      <View style={styles.imgContainer}>
        <AppLogo />
      </View>

      <ButtonApp
        label={'Continue'}
        onPress={() => navigation.navigate(routeApp.Login)}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imgCover: {},
});
