import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import Layout from '../../components/ui/Layout';
import {useIsFocused} from '@react-navigation/native';

export default function CourseDetail({navigtion}) {

  return (
    <Layout>
      <View>
        <Text>Course Detail</Text>
      </View>
    </Layout>
  );
}
