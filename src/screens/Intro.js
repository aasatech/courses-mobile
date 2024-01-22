import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../components/ui/Layout';
import ButtonApp from '../components/ui/Button';
import {Routes, routeApp} from '../routes/Routes';
import AppLogo from '../components/AppLogo';
// import Svg, { Circle } from 'react-native-svg';
import {SvgUri} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';
import MyLogo from '../assets/svg/undraw_undraw_undraw_undraw_undraw_calling_mcgf_gyrw_2jtb_-1-_eb38_-1-_d1yq (1).svg';
import {useSelector} from 'react-redux';
export default function Intro({navigation, route}) {
  const auth = useSelector(store => store.auth);
  console.log(auth);
  return (
    <Layout>
      <View style={styles.imgContainer}>
        {/* <AppLogo />
         */}
        <MyLogo width="70%" height="70%" fill={'red'} />
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
