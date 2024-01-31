import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import Layout from '../../components/ui/Layout';
import {useIsFocused} from '@react-navigation/native';
import {routeApp} from '../../routes/Routes';

export default function CourseDetail({navigation}) {
  const isFocused = useIsFocused();

  // useLayoutEffect(() => {
  //   console.log('rrr', isFocused);

  //   if (isFocused === false) {
  //     navigation.navigate(routeApp.Home.course);
  //   }
  // }, [isFocused]);
  return (
    <Layout>
      <View>
        <Text>Course Detail</Text>
      </View>
    </Layout>
  );
}
