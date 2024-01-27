import React, {useEffect, useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../components/ui/Layout';
import ButtonApp from '../components/ui/Button';
import {Routes, routeApp} from '../routes/Routes';
import AppLogo from '../components/AppLogo';
// import Svg, { Circle } from 'react-native-svg';
import {SvgUri} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';
import MyLogo from '../assets/svg/undraw_undraw_undraw_undraw_undraw_calling_mcgf_gyrw_2jtb_-1-_eb38_-1-_d1yq (1).svg';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GColor} from '../constants/Global';
import {resetErrorMessage, resetState} from '../redux/reducers/authReducer';
export default function Intro({navigation, route}) {
  const auth = useSelector(store => store.auth);
  const dispatch = useDispatch();



  // dispatch(resetState());
  return (
    <Layout>
      <View style={styles.imgContainer}>
        <AppLogo />
      </View>

      <ButtonApp
        bgColor={GColor.primary500}
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
