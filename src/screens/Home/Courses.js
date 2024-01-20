import React from 'react';
import Layout from '../../components/ui/Layout';
import {Text} from 'react-native';
import Button from '../../components/ui/Button';
import {routeApp} from '../../routes/Routes';
import {GColor} from '../../constants/Global';

export default function Courses({navigation}) {
  return (
    <Layout>
      <Text style={{color: GColor.accent300}}>Welcome to Course Screen</Text>
    </Layout>
  );
}
