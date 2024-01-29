import React, {useEffect} from 'react';
import Layout from '../../components/ui/Layout';
import {Text} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function Home() {
 
  return (
    <Layout>
      <Text style={{color: GColor.accent300}}>Welcome to Home Screen</Text>
    </Layout>
  );
}
